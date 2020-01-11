import { add } from './example'

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
