import palx from 'palx'
import { theme } from '@hackclub/design-system'

export const primary = '#0069ff'

export const palette = palx(primary)

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary,
  accent: palette.cyan[6],
  success: palette.teal[6],
  info: palette.blue[6],
  warning: palette.orange[6],
  error: palette.red[6],
  muted: grays.silver
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}

theme.colors = colors

export default theme
