import * as R from 'ramda'
import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { getType } from 'typesafe-actions'
import * as actions from './actions'
import { decrease, increase, save } from './helpers'

export interface DayState {
  totalPullUps: number
}

export const totalPullUpsReducer = createReducer(0, {
  [getType(actions.savePullUps)]: save,
})

export const getTotalPullUps: (state: DayState) => number = R.prop(
  'totalPullUps',
)

export const dayReducer = () =>
  combineReducers({
    totalPullUps: totalPullUpsReducer,
  })
