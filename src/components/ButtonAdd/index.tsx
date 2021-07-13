import React, { ComponentProps } from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Container } from './styles'
import { colors } from '../../styles/theme/colors'

type ButtonAddProps = RectButtonProps & ComponentProps<typeof Container>

export const ButtonAdd = ({ ...rest }: ButtonAddProps) => {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons name="plus" color={colors.heading} size={24} />
    </Container>
  )
}
