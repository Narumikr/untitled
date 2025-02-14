import { useContext } from 'react'

import { CreationSekaiContext } from '@/components/provider/CreationSekaiProvider'

export const useSekaiTheme = () => {
  const context = useContext(CreationSekaiContext)
  if (!context) {
    throw new Error('useSekaiTheme must be used within a CreationSekaiProvider')
  }
  return context
}
