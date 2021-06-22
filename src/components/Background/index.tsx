import React, { ReactNode } from 'react'

import { Container } from './styles'
import { colors } from '../../styles/theme/colors'

type BackgroundProps = {
  children: ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  const { secondary80, secondary100 } = colors

  return <Container colors={[secondary80, secondary100]}>{children}</Container>
}
