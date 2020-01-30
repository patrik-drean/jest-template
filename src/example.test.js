import { add } from './example'

// describe():
//// First param: name of the test suite
//// Second param: a function with the actual tests inside

// it() or test():
//// First param: name of the test
//// Second param: a function with the actual test logic and assertion statement inside

// expect().toEqual()
//// compares the calculated value to what is expected

describe('add', () => {
  it('adds positive numbers together', () => {
    const result = add(3, 5)
    const expected = 8

    expect(result).toEqual(expected)
  })
  it('adds positive and negative numbers together', () => {
    const result = add(2, -3)
    const expected = -1

    expect(result).toEqual(expected)
  })
})
