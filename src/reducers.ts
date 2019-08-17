import { combineReducers } from 'redux'
import {
  pullUpsReducer,
  totalPullUpsReducer,
} from './components/Counter/reducer'

interface Day {
  pullUps: number
  totalPullUps: number
}

interface AppState {
  days: Day[]
}

export const createRootReducer = () =>
  combineReducers({
    pullUps: pullUpsReducer,
    totalPullUps: totalPullUpsReducer,
  })
