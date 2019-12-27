import { return1 } from './example'

describe('Example test', () => {
  describe('When testing 1', () => {
    it('should return 1', () => {
      expect(return1()).toBe(1)
    })
  })
})
