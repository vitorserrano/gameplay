import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

export const Wrapper = styled(RectButton)<RectButtonProps>``

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  /* color: ${({ theme }) => theme.colors.heading}; */
  color: #fff;
  font-size: 18px;
`

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  /* color: ${({ theme }) => theme.colors.highlight}; */
  color: #fff;
  font-size: 13px;
  margin-right: 24px;
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
`

export const PLayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Player = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
`
