import styled, { css } from 'styled-components/native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

type CheckedProps = {
  isChecked: boolean
}

export const Wrapper = styled(RectButton)<RectButtonProps>``

export const Container = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`

export const Content = styled.View<CheckedProps>`
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0.4)};
  width: 100px;
  height: 116px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
`

export const Checkbox = styled.View<CheckedProps>`
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.secondary50};
  border-radius: 3px;

  ${({ theme, isChecked }) =>
    isChecked &&
    css`
      width: 10px;
      height: 10px;
      background-color: ${theme.colors.primary};
      align-self: flex-end;
      margin-right: 7px;
      border-radius: 3px;
    `}
`

export const Icon = styled.View``

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
`
