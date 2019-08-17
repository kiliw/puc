import * as R from 'ramda'

export const increase: (state: any, action: any) => any = R.pipe(
  R.nthArg(0),
  R.add(1),
)

const decreaseIfGreaterThanOne: (value: number) => number = R.ifElse(
  R.lte(1),
  R.flip(R.subtract)(1),
  R.always(0),
)

export const decrease: (state: any, action: any) => any = R.pipe(
  R.nthArg(0),
  decreaseIfGreaterThanOne,
)

export const save: (state: any, action: any) => any = R.converge(R.add, [
  R.nthArg(0),
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
])
