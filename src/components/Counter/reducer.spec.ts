import * as actions from './actions'
import { sessionReducer } from './reducer'

describe('Day reducers', () => {
  it('A user has done 10 Pull Ups and saves them to the history', () => {
    expect(sessionReducer([], actions.saveSession(10))).toEqual([
      { totalPullUps: 10, date: 1 },
    ])
    expect(
      sessionReducer([{ totalPullUps: 10, date: 1 }], actions.saveSession(10)),
    ).toEqual([{ totalPullUps: 10, date: 1 }, { totalPullUps: 10, date: 2 }])
  })
})
