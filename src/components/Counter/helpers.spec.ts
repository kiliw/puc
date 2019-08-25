import { decrease, increase } from './helpers'

describe('Counter helper functions', () => {
  it('Increase the pullUps', () => {
    expect(increase(0)).toEqual(1)
  })
  it('Decrease the pullUps', () => {
    expect(decrease(2)).toEqual(1)
    expect(decrease(1)).toEqual(0)
    expect(decrease(0)).toEqual(0)
  })
})
