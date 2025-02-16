import { useContext } from 'react'

import { YourSekaiContext } from '@/components/provider/YourSekaiProvider'

export const useCreateSekai = () => {
  const context = useContext(YourSekaiContext)
  if (!context) {
    throw new Error('useCreateSekai must be used within a YourSekaiProvider')
  }
  return context
}
