import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import CounterScreen from '../screens/CounterScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const config = Platform.select({
  default: {},
  web: { headerMode: 'screen' },
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
)

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarLabel: 'Home',
}

HomeStack.path = ''

const CounterStack = createStackNavigator(
  {
    Counter: CounterScreen,
  },
  config,
)

CounterStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-fitness' : 'md-fitness'}
    />
  ),
  tabBarLabel: 'Counter',
}

CounterStack.path = ''

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config,
)

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarLabel: 'Settings',
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  /* tslint:disable-next-line */
  CounterStack,
  SettingsStack,
})

tabNavigator.path = ''

export default tabNavigator
