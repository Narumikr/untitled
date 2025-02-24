export const fireOnEnterKey = (eventHandler: (e: KeyboardEvent) => void) => {
  return (e: KeyboardEvent) => {
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
