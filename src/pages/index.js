import React, { Fragment } from 'react'
import { Box, Card, Container, Heading } from '@hackclub/design-system'
import Img from 'gatsby-image'
import data from 'data.json'

import Header from 'components/Header'
import Bar from 'components/Bar'
import Funded from 'components/Funded'
import Footer from 'components/Footer'

const Grid = Box.extend`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  max-width: 64rem;
  margin: 1rem auto;
  ${props => props.theme.mediaQueries[1]} {
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
  .gatsby-image-wrapper {
    max-width: 100% !important;
    max-height: 16rem;
  }
`
const Photo = Card.withComponent(Img).extend`
  box-shadow: ${props => props.theme.boxShadows[1]};
  transition: box-shadow .125s ease-out;
  &:hover {
    box-shadow: ${props => props.theme.boxShadows[2]};
  }
`

const Gallery = ({ data }) => (
  <section id="gallery">
    <Bar />
    <Heading.h2 f={4}>Gallery</Heading.h2>
    <Grid>
      {data.allImageSharp.edges.map((image, i) => (
        <Photo resolutions={image.node.resolutions} key={`image-${i}`} />
      ))}
    </Grid>
  </section>
)

export default ({ data }) => (
  <main>
    <Header />
    <Gallery data={data} />
    <Funded />
    <Footer />
  </main>
)

export const pageQuery = graphql`
  query IndexQuery {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resolutions(width: 768) {
              ...GatsbyImageSharpResolutions_withWebp
            }
          }
        }
      }
    }
  }
`
