import React from 'react'

import { Container, Img } from './styles'
import { colors } from '../../styles/theme/colors'

type AvatarProps = {
  urlImage: string
}

export const Avatar = ({ urlImage }: AvatarProps) => {
  const { secondary50, secondary70 } = colors

  return (
    <Container colors={[secondary50, secondary70]}>
      <Img source={{ uri: urlImage }} />
    </Container>
  )
}
