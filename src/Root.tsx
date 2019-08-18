import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Counter } from './components/Counter'
import { Home } from './components/Home'

const AppNavigator = createStackNavigator(
  {
    Counter: {
      navigationOptions: () => ({
        title: `Counter`,
      }),
      screen: Counter,
    },
    Home: {
      navigationOptions: () => ({
        title: `PUC`,
      }),
      screen: Home,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fcf2d9',
      },
      headerTintColor: '#f7452a',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    initialRouteName: 'Home',
  },
)

const AppContainer = createAppContainer(AppNavigator)

export const Root = () => <AppContainer />
