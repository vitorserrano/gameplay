import React, { ComponentProps } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { Wrapper, Container, Content, Checkbox, Title } from './styles'
import { colors } from '../../styles/theme/colors'

type CategoryProps = RectButtonProps &
  ComponentProps<typeof Container> & {
    title: string
    icon: React.FC<SvgProps>
    checked?: boolean
  }

export const Category = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) => {
  const { secondary50, secondary70 } = colors

  return (
    <Wrapper {...rest}>
      <Container colors={[secondary50, secondary70]}>
        <Content isChecked={checked}>
          <Checkbox isChecked={checked} />
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </Container>
    </Wrapper>
  )
}
