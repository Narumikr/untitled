import { useEffect, useState } from 'react'

export const usePortalContainer = (containerComponent?: HTMLElement) => {
  const [portalComponent, setPortalComponent] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalComponent(containerComponent || document.body)
  }, [containerComponent])

  return portalComponent
}
