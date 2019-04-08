
import sensitiveWords from '.'

test('says hello world', () => (
  expect(sensitiveWords()).toBe('hello world')
))
