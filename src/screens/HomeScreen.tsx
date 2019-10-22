import { Container } from 'native-base'
import React from 'react'
import { Home } from '../components/Home'

export default function HomeScreen() {
  return (
    <Container style={{ paddingHorizontal: 10 }}>
      <Home />
    </Container>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}
