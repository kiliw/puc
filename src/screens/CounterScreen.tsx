import { Container, Content } from 'native-base'
import React from 'react'
import { Counter } from '../components/Counter'

export default function CounterScreen() {
  return (
    <Container style={{ paddingHorizontal: 10 }}>
      <Content>
        <Counter />
      </Content>
    </Container>
  )
}

CounterScreen.navigationOptions = {
  title: 'Counter',
}
