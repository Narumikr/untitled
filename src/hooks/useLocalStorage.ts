import { useEffect, useRef, useState } from 'react'

import { ConsoleError } from '@/internal/logging'
import { deserializeDataWithTemplate, serializeData } from '@/utils/serialization'

export const useLocalStorage = <T>(localStorageKey: string, initialValue: T) => {
  const isClient = useRef(typeof window !== 'undefined')
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!isClient.current) return initialValue
    try {
      const items = localStorage.getItem(localStorageKey)
      if (items) {
        return deserializeDataWithTemplate(JSON.parse(items), initialValue)
      }
    } catch (err) {
      ConsoleError('Failed to get local storage value : ', err)
    }
    return initialValue
  })

  useEffect(() => {
    if (!isClient.current) return
    try {
      const serialized = JSON.stringify(serializeData(storedValue))
      localStorage.setItem(localStorageKey, serialized)
    } catch (err) {
      ConsoleError('Failed to set local storage : ', err)
    }
  }, [localStorageKey, storedValue])

  useEffect(() => {
    if (!isClient.current) return

    const updateLocalStorage = (e: StorageEvent) => {
      try {
        if (e.key !== localStorageKey) return

        if (e.newValue === null) {
          setStoredValue(initialValue)
        } else {
          const parsed = JSON.parse(e.newValue)
          setStoredValue(deserializeDataWithTemplate(parsed, initialValue))
        }
      } catch (err) {
        ConsoleError('Failed to set local storage : ', err)
      }
    }

    window.addEventListener('storage', updateLocalStorage)

    return () => window.removeEventListener('storage', updateLocalStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteLocalStorage = () => {
    setStoredValue(initialValue)
    localStorage.removeItem(localStorageKey)
  }

  return {
    storedValue,
    setStoredValue,
    deleteLocalStorage
  }
}
