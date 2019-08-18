import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../../styles'
import { TouchButton } from '../Home'
import { Layout } from '../Layout'
import * as actions from './actions'
import * as selectors from './reducer'

export const Counter = () => {
  const dispatch = useDispatch()
  const amountOfPullUps = useSelector(selectors.getPullUps)
  const amountOfTotalPullUps = useSelector(selectors.getTotalPullUps)

  return (
    <Layout>
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
    </Layout>
  )
}
