import { Container, Content, H1, List, ListItem, Text } from 'native-base'
import * as R from 'ramda'
import React, { FunctionComponent, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import * as selectors from '../../selectors'
import { PullUpSession } from './reducer'

export const SessionHistory: FunctionComponent = () => {
  const lastEntries = useSelector(selectors.getLastTenEntries)

  return (
    <Container>
      <H1>Last Entries</H1>
      <Content>
        <List>{createHistory(lastEntries)}</List>
      </Content>
    </Container>
  )
}

const createSessionEntry = (
  { pullUps }: PullUpSession,
  index: number,
  list,
): ReactNode => (
  <ListItem key={index}>
    <Text>
      #{list.length - index}: PullUps: {pullUps}
    </Text>
  </ListItem>
)
const createHistory = R.addIndex<PullUpSession, ReactNode>(R.map)(
  createSessionEntry,
)
