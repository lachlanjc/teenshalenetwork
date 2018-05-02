import React from 'react'
import { primary } from 'theme/config'
import data from './data.json'

const Card = () => (
  <svg viewBox="0 0 1024 768" width={1024} height={768}>
    <rect width={1024} height={768} fill={primary} />
    <g transform="translate(256 128)">
      <svg viewBox="0 0 128 128" width={512} height={512}>
        <path fill="white" d={data.logo} />
      </svg>
    </g>
    <style dangerouslySetInnerHTML={{ __html: css }} />
  </svg>
)

const css = `
body { margin: 0; }
`

export default Card
