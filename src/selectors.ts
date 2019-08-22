import * as R from 'ramda'
import { PullUpHistory, PullUpSession } from './components/Counter/reducer'
import { AppState } from './reducers'

const getPullUpHistory: (state: AppState) => PullUpHistory = R.prop(
  'pullUpHistory',
)

export const getTotalPullUps: (state: AppState) => number = R.pipe<
  AppState,
  PullUpHistory,
  PullUpSession,
  number
>(
  getPullUpHistory,
  R.last,
  R.prop('totalPullUps'),
)

export const getLastTenEntries: (state: AppState) => PullUpHistory = R.pipe<
  AppState,
  PullUpHistory,
  PullUpHistory,
  PullUpHistory
>(
  getPullUpHistory,
  R.reverse,
  R.slice(0, 11),
)
