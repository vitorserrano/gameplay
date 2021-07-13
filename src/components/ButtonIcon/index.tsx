import React, { ComponentProps } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, IconWrapper, Icon, Title } from './styles'
import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = RectButtonProps &
  ComponentProps<typeof Container> & {
    children: string
  }

export const ButtonIcon = ({ children, ...rest }: ButtonIconProps) => (
  <Container {...rest}>
    <IconWrapper>
      <Icon source={DiscordImg} />
    </IconWrapper>

    <Title>{children}</Title>
  </Container>
)
