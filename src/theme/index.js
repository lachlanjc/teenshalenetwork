import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import theme from './config'

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: ${theme.font};
    line-height: 1.5;
  }
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: 400;
    src: url(//hackclub.com/fonts/averta-regular.woff2) format('woff2'), url(//hackclub.com/fonts/averta-regular.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: 700;
    src: url(//hackclub.com/fonts/averta-bold.woff2) format('woff2'), url(//hackclub.com/fonts/averta-bold.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
  a {
    box-shadow: none;
    text-decoration: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
`

const ThemeProvider = props => (
  <Root theme={theme} children={<div>{props.children}</div>} />
)

export default ThemeProvider
