import * as actions from './actions'
import {
  DayState,
  getPullUps,
  getTotalPullUps,
  pullUpsReducer,
  totalPullUpsReducer,
} from './reducer'

const MOCK_STATE: DayState = Object.freeze({
  pullUps: 10,
  totalPullUps: 20,
})

describe('Pull Up selectors', () => {
  it('A user has done 10 Pull Ups', () => {
    expect(getPullUps(MOCK_STATE)).toEqual(10)
  })
  it('A user has done 20 Pull Ups in total', () => {
    expect(getTotalPullUps(MOCK_STATE)).toEqual(20)
  })
})

describe('Pull Up reducers', () => {
  it('Increase the pullUps by 1', () => {
    expect(pullUpsReducer(10, actions.increasePullUps())).toEqual(11)
  })
  it('Decrease the pullUps by 1', () => {
    expect(pullUpsReducer(10, actions.decreasePullUps())).toEqual(9)
  })
  it('A user saves 10 Pull Ups', () => {
    expect(totalPullUpsReducer(0, actions.savePullUps(10))).toEqual(10)
    expect(totalPullUpsReducer(1, actions.savePullUps(10))).toEqual(11)
  })
})
