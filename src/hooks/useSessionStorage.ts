import { useEffect, useRef, useState } from 'react'

import { ConsoleError } from '@/internal/logging'
import { deserializeDataWithTemplate, serializeData } from '@/utils/serialization'

export const useSessionStorage = <T>(sessionStorageKey: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const isInitialized = useRef(false)

  useEffect(() => {
    if (isInitialized.current) return
    isInitialized.current = true

    try {
      const items = sessionStorage.getItem(sessionStorageKey)
      if (items) {
        const parsed = deserializeDataWithTemplate(JSON.parse(items), initialValue)
        setStoredValue(parsed)
      }
    } catch (err) {
      ConsoleError('Failed to get session storage value : ', err)
    }
  }, [initialValue, sessionStorageKey])

  useEffect(() => {
    if (!isInitialized.current) return

    try {
      const serialized = JSON.stringify(serializeData(storedValue))
      sessionStorage.setItem(sessionStorageKey, serialized)
    } catch (err) {
      ConsoleError('Failed to set session storage : ', err)
    }
  }, [sessionStorageKey, storedValue])

  const deleteSessionStorage = () => {
    setStoredValue(initialValue)
    sessionStorage.removeItem(sessionStorageKey)
  }

  return {
    storedValue,
    setStoredValue,
    deleteSessionStorage,
  }
}
