import React from 'react'

import { ButtonIcon } from '../../components/ButtonIcon'

import {
  Container,
  StyledStatusBar,
  Illustration,
  Content,
  Title,
  Subtitle,
} from './styles'

import IllustrationImg from '../../assets/illustration.png'

export const SignIn = () => {
  return (
    <Container>
      <StyledStatusBar />
      <Illustration source={IllustrationImg} />

      <Content>
        <Title>
          Conecte-se {'\n'} e organize suas {'\n'} jogatinas
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon activeOpacity={0.7}>Entrar com Discord</ButtonIcon>
      </Content>
    </Container>
  )
}
