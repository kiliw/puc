import * as R from 'ramda'
import { PullUpHistory, PullUpSession } from './components/Counter/reducer'
import { AppState } from './reducers'

export const getTotalPullUps: (state: AppState) => number = R.pipe<
  AppState,
  PullUpHistory,
  PullUpSession,
  number
>(
  R.prop('pullUpHistory'),
  R.head,
  R.prop('totalPullUps'),
)
