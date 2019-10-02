import { AppState } from './reducers'
import { getOverAllPullUps, getTotalPullUps } from './selectors'

const MOCK_STATE: AppState = Object.freeze({
  pullUpHistory: [
    {
      date: 1,
      pullUps: 20,
    },
    { date: 2, pullUps: 22 },
  ],
})

describe('Pull Up selectors', () => {
  it('A user has done 22 Pull Ups in the last session', () => {
    expect(getTotalPullUps(MOCK_STATE)).toEqual(22)
  })
  it('A user has done 42 Pull Ups in total over all sessions', () => {
    expect(getOverAllPullUps(MOCK_STATE)).toEqual(42)
  })
})
