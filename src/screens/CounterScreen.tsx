import { Container, Content, Header, Title } from 'native-base'
import React from 'react'
import { Counter } from '../components/Counter'

export default function CounterScreen() {
  return (
    <Container>
      <Header>
        <Title>Counter</Title>
      </Header>
      <Content>
        <Counter />
      </Content>
    </Container>
  )
}

CounterScreen.navigationOptions = {
  header: null,
}
