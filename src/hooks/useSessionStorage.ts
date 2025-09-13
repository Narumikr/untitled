import { useEffect, useState } from 'react'

import { ConsoleError } from '@/internal/logging'
import { deserializeDataWithTemplate, serializeData } from '@/utils/serialization'

export interface SessionStorageStoreProps<T> {
  sessionStorageKey: string
  initialValue?: T
}

export const useSessionStorage = <T>({
  sessionStorageKey,
  initialValue
}: SessionStorageStoreProps<T>) => {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const items = sessionStorage.getItem(sessionStorageKey)
      if (items) {
        return deserializeDataWithTemplate(JSON.parse(items), initialValue)
      }
    } catch (err) {
      ConsoleError('Failed to get session storage value : ', err)
    }
    return initialValue
  })

  useEffect(() => {
    try {
      const serialized = JSON.stringify(serializeData(storedValue))
      sessionStorage.setItem(sessionStorageKey, serialized)
    } catch (err) {
      ConsoleError('Failed to set session storage : ', err)
    }
  }, [storedValue])

  const deleteSessionStorage = () => {
    sessionStorage.removeItem(sessionStorageKey)
  }

  return {
    storedValue,
    setStoredValue,
    deleteSessionStorage
  }
}
