import { useContext } from 'react'

import { CreationSekaiContext } from '@/components/provider/CreationSekaiProvider'

export const useCreateSekai = () => {
  const context = useContext(CreationSekaiContext)
  if (!context) {
    throw new Error('useCreateSekai must be used within a CreationSekaiProvider')
  }
  return context
}
