import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles'

export const Header = () => (
  <View style={styles.sectionMainTitle}>
    <Text style={styles.mainTitle}>PUC the</Text>
    <Text style={styles.mainTitle}>Pull-Up-Counter</Text>
  </View>
)
