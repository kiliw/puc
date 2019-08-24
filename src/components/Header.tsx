import { H1 } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Header = () => (
  <View style={styles.mainTitle}>
    <H1>PUC the</H1>
    <H1>Pull-Up-Counter</H1>
  </View>
)
const styles = StyleSheet.create({
  mainTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
    paddingHorizontal: 24,
  },
})
