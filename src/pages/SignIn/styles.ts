import styled from 'styled-components/native'

export const StyledStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  barStyle: 'light-content',
  translucent: true,
  backgroundColor: theme.colors.background,
}))``

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Illustration = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 360px;
`

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
`
