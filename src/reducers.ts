import { combineReducers } from 'redux'
import { PullUpHistory, sessionReducer } from './components/Counter/reducer'

export interface AppState {
  pullUpHistory: PullUpHistory
}

export const createRootReducer = () =>
  combineReducers({
    pullUpHistory: sessionReducer,
  })
