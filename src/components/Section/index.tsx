import React from 'react'

import { Container, Select, ClearButton } from './styles'

const Section: React.FC = () => {
  return (
    <Container>
      <Select>
        <span>Newest first</span>
      </Select>
      <ClearButton>clear</ClearButton>
    </Container>
  )
}

export default Section
