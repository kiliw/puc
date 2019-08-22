import * as actions from './actions'
import { DayState, getTotalPullUps, totalPullUpsReducer } from './reducer'

const MOCK_STATE: DayState = Object.freeze({
  pullUps: 10,
  totalPullUps: 20,
})

describe('Pull Up selectors', () => {
  it('A user has done 20 Pull Ups in total', () => {
    expect(getTotalPullUps(MOCK_STATE)).toEqual(20)
  })
})

describe('Pull Up reducers', () => {
  it('A user saves 10 Pull Ups', () => {
    expect(totalPullUpsReducer(0, actions.savePullUps(10))).toEqual(10)
    expect(totalPullUpsReducer(1, actions.savePullUps(10))).toEqual(11)
  })
})
