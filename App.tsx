import React from 'react'

import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani'

import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components'
import { appTheme } from './src/styles/theme'

import { SignIn } from './src/pages/SignIn'

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={appTheme}>
      <SignIn />
    </ThemeProvider>
  )
}

export default App
