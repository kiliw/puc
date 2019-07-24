import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles'

export const Header = () => (
  <View style={styles.sectionMainTitle}>
    <Text style={styles.mainTitle}>PUC</Text>
    <Text style={styles.mainTitle}>the Pull-Up-Counter</Text>
  </View>
)
