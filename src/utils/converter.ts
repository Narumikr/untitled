export const convertHexToRgb = (hex: string) => {
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB')
  }

  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgb(${r}, ${g}, ${b})`
}

export const convertHexToRgba = (hex: string, alpha: number) => {
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB')
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha must be between 0 and 1')
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const convertHexToRgbMixWithWhite = (hex: string, alpha: number) => {
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB')
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha must be between 0 and 1')
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const white = 255
  const mixR = Math.round(r * alpha + white * (1 - alpha))
  const mixG = Math.round(g * alpha + white * (1 - alpha))
  const mixB = Math.round(b * alpha + white * (1 - alpha))
  return `rgb(${mixR}, ${mixG}, ${mixB})`
}
