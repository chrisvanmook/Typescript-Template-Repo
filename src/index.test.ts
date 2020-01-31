import { sayHello } from './index'

describe('sayHello', () => {
  it('should alert "hello"', () => {
    const result = sayHello()
    expect(result).toBe('Hello!')
  })
})
