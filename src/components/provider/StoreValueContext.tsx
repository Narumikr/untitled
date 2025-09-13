import React, { createContext, useContext } from 'react'

import { useSessionStorage } from '@/hooks/useSessionStorage'

export interface SharedValueProviderProps<T> {
  children: React.ReactNode
  sessionStorageKey: string
  defaultValue: T
}

export interface SharedValueContextProps<T> {
  sharedValue: T
  setSharedValue: React.Dispatch<React.SetStateAction<T>>
  deleteSharedValue: () => void
}

export const createSharedValueProvider = <T,>() => {
  const SharedValueContext = createContext<SharedValueContextProps<T> | null>(null)

  const useSharedValueContext = () => {
    const context = useContext(SharedValueContext)
    if (!context) {
      throw new Error('useSharedValueContext must be used within a SharedValueProvider.')
    }
    return context
  }

  const SharedValueProvider = ({
    children,
    sessionStorageKey,
    defaultValue
  }: SharedValueProviderProps<T>) => {
    const {
      storedValue: sharedValue,
      setStoredValue: setSharedValue,
      deleteSessionStorage: deleteSharedValue
    } = useSessionStorage<T>({
      sessionStorageKey,
      initialValue: defaultValue
    })

    return (
      <SharedValueContext.Provider value={{ sharedValue, setSharedValue, deleteSharedValue }}>
        {children}
      </SharedValueContext.Provider>
    )
  }

  return {
    useSharedValueContext,
    SharedValueProvider
  }
}
