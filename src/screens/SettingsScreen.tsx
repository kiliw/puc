import { ExpoConfigView } from '@expo/samples'
import { Container } from 'native-base'
import React from 'react'
import { ScrollView } from 'react-native'
import { Settings } from '../components/Settings'

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <ScrollView>
        <ExpoConfigView />
        <Settings />
      </ScrollView>
    </Container>
  )
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
}
