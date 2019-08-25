import { Container } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Home } from '../components/Home'

export default function HomeScreen() {
  return (
    <Container>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Container>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}
