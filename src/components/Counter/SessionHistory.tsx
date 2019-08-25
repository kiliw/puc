import { Container, Content, Header, List, ListItem, Text } from 'native-base'
import * as R from 'ramda'
import React, { FunctionComponent, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import * as selectors from '../../selectors'
import { PullUpSession } from './reducer'

export const SessionHistory: FunctionComponent = () => {
  const lastEntries = useSelector(selectors.getLastTenEntries)

  return (
    <Container>
      <Header>
        <Text>Last Entries</Text>
      </Header>
      <Content>
        <List>{createHistory(lastEntries)}</List>
      </Content>
    </Container>
  )
}

const createSessionEntry = (
  { totalPullUps }: PullUpSession,
  index: number,
): ReactNode => (
  <ListItem key={index}>
    <Text>
      #{index}: PullUps: {totalPullUps}
    </Text>
  </ListItem>
)
const createHistory = R.addIndex<PullUpSession, ReactNode>(R.map)(
  createSessionEntry,
)
