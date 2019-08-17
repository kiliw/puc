import React from 'react'
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
      <Text style={styles.sectionTitle}>
        Total Pull Ups: {amountOfTotalPullUps}
      </Text>
      <Text style={styles.sectionTitle}>Pull Ups: {amountOfPullUps}</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => dispatch(actions.decreasePullUps())}
          underlayColor="white"
        >
          <View style={[styles.button, styles.buttonIncrease]}>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch(actions.increasePullUps())}
          underlayColor="white"
        >
          <View style={[styles.button, styles.buttonIncrease]}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        onPress={() => {
          dispatch(actions.savePullUps(amountOfPullUps))
          dispatch(actions.resetPullUps())
        }}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Save PullUps</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}
