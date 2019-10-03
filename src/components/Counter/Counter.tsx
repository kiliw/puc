import { Button, Container, H1 } from 'native-base'
import * as R from 'ramda'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import * as actions from './actions'
import { decrease, increase } from './helpers'

export const CounterComponent = () => {
  const dispatch = useDispatch()
  const [currentPullUps = 0, updatePullUps] = useState()

  return (
    <Container>
      <Text style={{ fontSize: 40, paddingVertical: 20, textAlign: 'center' }}>
        {currentPullUps}
      </Text>
      <View>
        <View style={styles.buttonContainer}>
          <Button
            large
            style={[styles.button, styles.buttonIncrease]}
            onPress={() =>
              R.pipe(
                decrease,
                updatePullUps,
              )(currentPullUps)
            }
          >
            <Text>-</Text>
          </Button>
          <Button
            large
            style={[styles.button, styles.buttonIncrease]}
            onPress={() =>
              R.pipe(
                increase,
                updatePullUps,
              )(currentPullUps)
            }
          >
            <Text>+</Text>
          </Button>
        </View>
        <Button
          large
          style={styles.button}
          onPress={() => {
            dispatch(actions.saveSession(currentPullUps))
            updatePullUps(0)
          }}
        >
          <Text>Save Pull Ups</Text>
        </Button>
      </View>
    </Container>
  )
}

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  buttonIncrease: {
    width: 100,
  },
})
