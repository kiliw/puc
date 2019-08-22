import { AppState } from './reducers'
import { getTotalPullUps } from './selectors'

const MOCK_STATE: AppState = Object.freeze({
  pullUpHistory: [
    {
      date: 1,
      totalPullUps: 20,
    },
    { date: 2, totalPullUps: 22 },
  ],
})

describe('Pull Up selectors', () => {
  it('A user has done 20 Pull Ups in total', () => {
    expect(getTotalPullUps(MOCK_STATE)).toEqual(20)
  })
})
