import { createReducer } from 'redux-create-reducer'
import { getType } from 'typesafe-actions'
import * as actions from './actions'

export interface PullUpSession {
  totalPullUps: number
  date: number
}
export type PullUpHistory = PullUpSession[]

export const sessionReducer = createReducer<PullUpHistory, any>([], {
  [getType(actions.saveSession)]: (state, action) => {
    return [
      ...state,
      { totalPullUps: action.payload, date: createUnixTimeStamp() },
    ]
  },
})

const createUnixTimeStamp = () => new Date().getTime()
