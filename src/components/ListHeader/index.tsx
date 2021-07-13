import React from 'react'

import { Container, Title, Subtitle } from './styles'

type ListHeaderProps = {
  title: string
  subtitle: string
}

export const ListHeader = ({ title, subtitle }: ListHeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
