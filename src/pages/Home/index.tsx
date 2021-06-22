import React from 'react'
import { Profile } from '../../components/Profile'
import { Container, Header } from './styles'

export const Home = () => {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  )
}
