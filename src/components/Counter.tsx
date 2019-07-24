import * as R from 'ramda'
import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from '../styles'

type SetStateType = (value: number) => void

const increase: (value: number, setState: SetStateType) => void = (
  value,
  setState,
) =>
  R.pipe(
    R.add(1),
    setState,
  )(value)

const isLargerThanZero: (value: number) => number = R.ifElse(
  R.lt(1),
  R.flip(R.subtract)(1),
  R.always(0),
)

const decrease: (value: number, setState: SetStateType) => void = (
  value,
  setState,
) =>
  R.pipe(
    isLargerThanZero,
    setState,
  )(value)

export const Counter = () => {
  const [amountOfPullUps, setState] = useState(0)
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Pull Ups: {amountOfPullUps}</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => decrease(amountOfPullUps, setState)}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => increase(amountOfPullUps, setState)}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}
