import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

export const Container = styled(RectButton)<RectButtonProps>`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`
