import React from 'react'
import { Text, View } from 'react-native'
import { Header } from './Header'
import { Layout } from './Layout'

export const Home = () => (
  <Layout>
    <Header />
    <View>
      <Text>Go and count your pull ups!</Text>
    </View>
  </Layout>
)
