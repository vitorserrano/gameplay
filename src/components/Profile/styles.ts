import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Container = styled.View``

export const User = styled.View`
  flex-direction: row;
`

export const Greeting = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.title500};
  color: ${({ theme }) => theme.colors.heading};
  margin-right: 6px;
`

export const Username = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
`

export const Message = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
`
