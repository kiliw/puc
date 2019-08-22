import { combineReducers } from 'redux'
import { dayReducer, Days } from './components/Counter/reducer'

export interface AppState {
  days: Days
}

export const createRootReducer = () =>
  combineReducers({
    days: dayReducer,
  })
