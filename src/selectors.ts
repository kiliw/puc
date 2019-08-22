import * as R from 'ramda'
import { Day, Days } from './components/Counter/reducer'
import { AppState } from './reducers'

export const getTotalPullUps: (state: AppState) => number = R.pipe<
  AppState,
  Days,
  Day,
  number
>(
  R.prop('days'),
  R.head,
  R.prop('totalPullUps'),
)
