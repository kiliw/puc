import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Counter } from '../components/Counter'

export default function CounterScreen() {
  return (
    <ScrollView style={styles.container}>
      <Counter />
    </ScrollView>
  )
}

CounterScreen.navigationOptions = {
  title: 'Counter',
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 15,
  },
})
