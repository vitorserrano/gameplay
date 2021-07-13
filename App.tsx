import React from 'react'
import { StatusBar } from 'react-native'

import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani'

import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components'
import { appTheme } from './src/styles/theme'
import { Background } from './src/components/Background'

import { Routes } from './src/routes'

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
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Background>
        <Routes />
      </Background>
    </ThemeProvider>
  )
}

export default App
