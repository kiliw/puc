import { ExpoConfigView } from '@expo/samples'
import { Container } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { Settings } from '../components/Settings'

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <ExpoConfigView />
      <Settings />
    </Container>
  )
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
}
