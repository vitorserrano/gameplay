import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Illustration, Content, Title, Subtitle } from './styles'

import IllustrationImg from '../../assets/illustration.png'

export const SignIn = () => {
  const navigation = useNavigation()

  const handleNavigateToHome = () => navigation.navigate('Home')

  return (
    <Container>
      <Illustration source={IllustrationImg} />

      <Content>
        <Title>
          Conecte-se {'\n'} e organize suas {'\n'} jogatinas
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon onPress={handleNavigateToHome}>
          Entrar com Discord
        </ButtonIcon>
      </Content>
    </Container>
  )
}
