import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Counter } from './components/Counter'
import { Home } from './components/Home'

const AppNavigator = createStackNavigator(
  {
    Counter,
    Home,
  },
  {
    initialRouteName: 'Home',
  },
)

const AppContainer = createAppContainer(AppNavigator)

export const Root = () => <AppContainer />
