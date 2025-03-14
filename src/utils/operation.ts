export const fireOnEnterKey = (
  eventHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void
) => {
  return (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      eventHandler(e)
      e.preventDefault()
    }
  }
}

export const fireOnEscapeKey = (eventHandler: (e: KeyboardEvent) => void) => {
  return (e: KeyboardEvent) => {
    e.preventDefault()
    if (e.key === 'Escape') {
      eventHandler(e)
    }
  }
}
