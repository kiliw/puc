import * as R from 'ramda'
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
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

const decrease: (value: number, setState: SetStateType) => void = (
  value,
  setState,
) =>
  R.pipe(
    R.flip(R.subtract)(1),
    setState,
  )(value)

export const Counter = () => {
  const [amountOfPullUps, setState] = useState(0)
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Pull Ups: {amountOfPullUps}</Text>
      <View style={styles.buttonContainer}>
        <Button title="-" onPress={() => decrease(amountOfPullUps, setState)} />
        <Button title="+" onPress={() => increase(amountOfPullUps, setState)} />
      </View>
    </View>
  )
}
