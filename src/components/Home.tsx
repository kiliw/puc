import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { styles } from '../styles'
import { Header } from './Header'

export const Home: FunctionComponent = (
  props, // TODO Add typings for the navigation
) => (
  <View>
    <Header />
    <View>
      <View style={{ marginBottom: 64 }}>
        <Text style={{ textAlign: 'center' }}>
          Go and count your pull ups!{' '}
        </Text>
        <Text style={{ textAlign: 'center' }}>
          This is a simple counter to keep track of your pull ups.
        </Text>
      </View>
    </View>
  </View>
)

export const TouchButton: FunctionComponent<{
  style?: any
  text: string
  onPress: () => void
}> = ({ text, style, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="white">
    <View style={style}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableHighlight>
)
