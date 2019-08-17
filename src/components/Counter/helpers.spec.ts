import { decrease, increase } from './helpers'

describe('Counter helper functions', () => {
  it('Increase the pullUps', () => {
    expect(increase(0, { type: 'anyAction', payload: 0 })).toEqual(1)
  })
  it('Increase the pullUps', () => {
    expect(decrease(2, { type: 'anyAction', payload: 0 })).toEqual(1)
    expect(decrease(1, { type: 'anyAction', payload: 0 })).toEqual(0)
    expect(decrease(0, { type: 'anyAction', payload: 0 })).toEqual(0)
  })
})
