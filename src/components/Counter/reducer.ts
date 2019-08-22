import { createReducer } from 'redux-create-reducer'
import { getType } from 'typesafe-actions'
import * as actions from './actions'
import { save } from './helpers'

export interface Day {
  totalPullUps: number
}
export type Days = Day[]

export const totalPullUpsReducer = createReducer(0, {
  [getType(actions.savePullUps)]: save,
})

export const dayReducer = createReducer<Days, any>([], {
  [getType(actions.saveDay)]: (state, action) => {
    return [...state, { totalPullUps: action.payload }]
  },
})
