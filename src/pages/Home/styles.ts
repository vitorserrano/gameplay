import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { AppointmentProps } from '../../components/Appointment'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
`

export const Content = styled.View`
  margin-top: 42px;
`

export const Matches = styled(FlatList as new () => FlatList<AppointmentProps>)`
  margin-top: 24px;
  margin-left: 24px;
`
