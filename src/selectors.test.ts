import { AppState } from './reducers'
import { getTotalPullUps } from './selectors'

const MOCK_STATE: AppState = Object.freeze({
  days: [
    {
      totalPullUps: 20,
    },
    {
      totalPullUps: 22,
    },
  ],
})

describe('Pull Up selectors', () => {
  it('A user has done 20 Pull Ups in total', () => {
    expect(getTotalPullUps(MOCK_STATE)).toEqual(20)
  })
})
