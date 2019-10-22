import { createReducer } from 'redux-create-reducer'
import { getType } from 'typesafe-actions'
import * as actions from './actions'

export interface PullUpSession {
  pullUps: number
  date: number
}
export type PullUpHistory = PullUpSession[]

export const sessionReducer = createReducer<PullUpHistory, any>([], {
  [getType(actions.saveSession)]: (state, action) => {
    return [...state, { pullUps: action.payload, date: createUnixTimeStamp() }]
  },
  [getType(actions.clearSessions)]: () => {
    return []
  },
})

const createUnixTimeStamp = () => new Date().getTime()
