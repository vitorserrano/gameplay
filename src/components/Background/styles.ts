import styled from 'styled-components/native'

import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient)`
  height: ${`${Dimensions.get('window').height}px`};
`
