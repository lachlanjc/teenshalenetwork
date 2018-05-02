import React from 'react'
import Logo from './Logo'
import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  LargeButton,
  Badge,
  Section,
  Container
} from '@hackclub/design-system'
import data from 'data.json'

const Base = Section.withComponent('header').extend`
	background-image: linear-gradient(32deg, #66a5ff, #0069ff 50%);
`

const Header = () => (
  <Base bg="primary" py={[4, 5]}>
    <Container maxWidth={42} px={3}>
      <Logo color="white" size={72} />
      <Flex justify="center" align="center" mb={3} wrap>
        <Heading.h1 f={6} mr={[null, 3]}>
          TeenShale Network
        </Heading.h1>
        <Badge bg="white" color="primary" mt={[2, 0]}>
          State High
        </Badge>
      </Flex>
      <Text f={[3, 4]}>{data.description}</Text>
      <LargeButton bg="success" my={4} href="https://hackclub.com">
        <Text f={1} caps>
          Back us on
        </Text>
        <Text f={4} caps>
          Kickstarter
        </Text>
      </LargeButton>
    </Container>
  </Base>
)

export default Header
