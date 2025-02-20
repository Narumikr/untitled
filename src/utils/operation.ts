export const fireOnEnterKey = (eventHandler: (e: React.KeyboardEvent) => void) => {
  return (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      eventHandler(e)
      e.preventDefault()
    }
  }
}

export const fireOnEscapeKey = (eventHandler: (e: KeyboardEvent) => void) => {
  return (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      eventHandler(e)
      e.preventDefault()
    }
  }
}
