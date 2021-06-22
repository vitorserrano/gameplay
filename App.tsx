import React from 'react'

import { ThemeProvider } from 'styled-components'
import { appTheme } from './src/styles/theme'

import { SignIn } from './src/pages/SignIn'

const App = () => (
  <ThemeProvider theme={appTheme}>
    <SignIn />
  </ThemeProvider>
)

export default App
