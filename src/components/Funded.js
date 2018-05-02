import React from 'react'
import { Container, Heading, Link } from '@hackclub/design-system'
import Bar from './Bar'
import Columns from './Columns'
import Column from './Column'
import data from 'data.json'

const Funded = () => (
  <Container maxWidth={42} px={3} id="funded">
    <Bar />
    <Heading.h2 f={4}>Funded by</Heading.h2>
    <Columns>
      {data.funded.map((item, i) => (
        <Column key={item}>
          {item}
        </Column>
      ))}
    </Columns>
  </Container>
)

export default Funded
