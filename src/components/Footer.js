import React from 'react'
import { Box, Flex, Text, Link, colors } from '@hackclub/design-system'
import Bar from 'components/Bar'
import data from 'data.json'

const Footer = () => (
<footer>
<Bar mt={4} mb={3} />
  <Flex justify='center' align='center' f={1} pb={5}>
  <Text color='snow' mr={2}>Keep being awesome.</Text>
        <Link href={data.repo} color='smoke' children="GitHub" />
  </Flex>
  </footer>
)

export default Footer
