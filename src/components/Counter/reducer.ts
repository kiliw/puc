import * as R from 'ramda'
import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { getType } from 'typesafe-actions'
import * as actions from './actions'
import { decrease, increase, save } from './helpers'

export interface DayState {
  pullUps: number
  totalPullUps: number
}

export const pullUpsReducer = createReducer(0, {
  [getType(actions.increasePullUps)]: increase,
  [getType(actions.decreasePullUps)]: decrease,
  [getType(actions.resetPullUps)]: R.always(0),
})

export const totalPullUpsReducer = createReducer(0, {
  [getType(actions.savePullUps)]: save,
})

export const getPullUps: (state: DayState) => number = R.prop('pullUps')
export const getTotalPullUps: (state: DayState) => number = R.prop(
  'totalPullUps',
)

export const dayReducer = () =>
  combineReducers({
    pullUps: pullUpsReducer,
    totalPullUps: totalPullUpsReducer,
  })
