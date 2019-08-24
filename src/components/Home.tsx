import { H1, H3 } from 'native-base'
import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import * as selectors from '../selectors'
import { styles } from '../styles'
import { Header } from './Header'

export const Home: FunctionComponent = (
  props, // TODO Add typings for the navigation
) => {
  const overAllPullUps = useSelector(selectors.getOverAllPullUps)
  return (
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
      <View>
        <View style={{ marginBottom: 64 }}>
          <Text style={{ textAlign: 'center' }}>
            Checkout your overall amount of pull ups
          </Text>
          <Text style={{ fontSize: 60, paddingTop: 30, textAlign: 'center' }}>
            {overAllPullUps}
          </Text>
        </View>
      </View>
    </View>
  )
}

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
