import React from 'react'
import Img from 'gatsby-image'
import { Heading, Box } from '@hackclub/design-system'
import Bar from './Bar'
import Columns from './Columns'
import Column from './Column'

const Grid = Box.extend`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  max-width: 64rem;
  margin: 1rem auto;
  ${props => props.theme.mediaQueries[1]} {
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`
const Gallery = ({ data }) => (
  <section id="submit">
    <Bar />
    <Heading.h2 f={4}>Gallery</Heading.h2>
    <Grid>
    {data.allImageSharp.edges.map(image =>
      <Img resolutions={image.node.resize.src} key={image.node.resize.src} />
    )}
    </Grid>
  </section>
)

export default Gallery
