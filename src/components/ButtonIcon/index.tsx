import React, { ComponentProps } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, IconWrapper, Icon, Title } from './styles'
import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = TouchableOpacityProps &
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
