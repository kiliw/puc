import * as R from 'ramda'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../../styles'
import { TouchButton } from '../Home'
import { Layout } from '../Layout'
import * as actions from './actions'
import { decrease, increase } from './helpers'
import * as selectors from './reducer'

export const Counter = () => {
  const dispatch = useDispatch()
  const amountOfTotalPullUps = useSelector(selectors.getTotalPullUps)
  const [currentPullUps, updatePullUps] = useState()

  return (
    <Layout>
      <View>
        <Text style={styles.sectionTitle}>
          Total Pull Ups: {amountOfTotalPullUps}
        </Text>
        <Text style={styles.sectionTitle}>Pull Ups: {currentPullUps}</Text>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <TouchButton
            style={[styles.button, styles.buttonIncrease]}
            text="-"
            onPress={() =>
              R.pipe(
                decrease,
                updatePullUps,
              )(currentPullUps)
            }
          />
          <TouchButton
            style={[styles.button, styles.buttonIncrease]}
            text="+"
            onPress={() =>
              R.pipe(
                increase,
                updatePullUps,
              )(currentPullUps)
            }
          />
        </View>
        <TouchButton
          text="Save PullUps"
          style={styles.button}
          onPress={() => {
            dispatch(actions.savePullUps(currentPullUps))
            updatePullUps(0)
          }}
        />
      </View>
    </Layout>
  )
}
