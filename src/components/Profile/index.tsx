import React from 'react'

import { Avatar } from '../Avatar'

import { Wrapper, Container, User, Greeting, Username, Message } from './styles'

export const Profile = () => {
  return (
    <Wrapper>
      <Avatar urlImage={'https://github.com/vitorserrano.png'} />

      <Container>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Vitor</Username>
        </User>

        <Message>Hoje é dia de vitória</Message>
      </Container>
    </Wrapper>
  )
}
