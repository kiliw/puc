import React, { FunctionComponent } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../../styles'
import * as actions from './actions'
import * as selectors from './reducer'

export const Counter = () => {
  const dispatch = useDispatch()
  const amountOfPullUps = useSelector(selectors.getPullUps)
  const amountOfTotalPullUps = useSelector(selectors.getTotalPullUps)

  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text style={styles.sectionTitle}>
          Total Pull Ups: {amountOfTotalPullUps}
        </Text>
        <Text style={styles.sectionTitle}>Pull Ups: {amountOfPullUps}</Text>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <TouchButton
            style={[styles.button, styles.buttonIncrease]}
            text="-"
            onPress={() => dispatch(actions.decreasePullUps())}
          />
          <TouchButton
            style={[styles.button, styles.buttonIncrease]}
            text="+"
            onPress={() => dispatch(actions.increasePullUps())}
          />
        </View>
        <TouchButton
          text="Save PullUps"
          style={styles.button}
          onPress={() => {
            dispatch(actions.savePullUps(amountOfPullUps))
            dispatch(actions.resetPullUps())
          }}
        />
      </View>
    </View>
  )
}

const TouchButton: FunctionComponent<{
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
