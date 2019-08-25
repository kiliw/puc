import * as R from 'ramda'
import { PullUpHistory } from './reducer'

export const increase: (value: number) => number = R.add(1)

const isLargerThanZero: (value: number) => number = R.ifElse(
  R.lt(1),
  R.flip(R.subtract)(1),
  R.always(0),
)

export const decrease: (value: number) => number = (value) =>
  R.pipe(isLargerThanZero)(value)

export const save: (state: any, action: any) => any = R.converge(R.add, [
  R.nthArg(0),
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
])

export const saveDayToStore: (
  state: PullUpHistory,
  action: any,
) => PullUpHistory = (state, action) => {
  return [
    ...state,
    { totalPullUps: action.payload, date: new Date().getDate() },
  ]
}
