import * as actions from './actions'
import { dayReducer, totalPullUpsReducer } from './reducer'

describe('Pull Up reducers', () => {
  it('A user saves 10 Pull Ups', () => {
    expect(totalPullUpsReducer(0, actions.savePullUps(10))).toEqual(10)
    expect(totalPullUpsReducer(1, actions.savePullUps(10))).toEqual(11)
  })
})

describe('Day reducers', () => {
  it('A user has done 10 Pull Ups and saves them to the total amount for today', () => {
    expect(dayReducer([], actions.savePullUps(10))).toEqual([
      { totalPullUps: 10 },
    ])
    expect(
      dayReducer(
        [{ totalPullUps: 10 }, { totalPullUps: 10 }],
        actions.savePullUps(10),
      ),
    ).toEqual([{ totalPullUps: 20 }, { totalPullUps: 10 }])
  })
  it('A user has done 10 Pull Ups and saves the day', () => {
    expect(dayReducer([], actions.saveDay(10))).toEqual([{ totalPullUps: 10 }])
    expect(dayReducer([{ totalPullUps: 10 }], actions.saveDay(11))).toEqual([
      { totalPullUps: 10 },
      { totalPullUps: 11 },
    ])
  })
})
