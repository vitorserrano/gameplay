import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  font-family: ${({ theme }) => theme.fonts.title700};
  line-height: 40px;
  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.title500};
  line-height: 25px;
  margin-bottom: 64px;
`
