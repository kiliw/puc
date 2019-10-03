import { Container } from 'native-base'
import React from 'react'
import { CounterComponent } from './Counter'
import { SessionHistory } from './SessionHistory'

export const Counter = () => (
  <Container>
    <CounterComponent />
    <SessionHistory />
  </Container>
)
