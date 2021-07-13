import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}
  >
    <Screen name="SignIn" component={SignIn} />
    <Screen name="Home" component={Home} />
  </Navigator>
)
