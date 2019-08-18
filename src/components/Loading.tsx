import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { styles } from '../styles'

export const Loading = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionMainTitle}>
      <Text style={styles.mainTitle}>Loading...</Text>
    </View>
    <ActivityIndicator size="large" color="#f7452a" />
  </View>
)
