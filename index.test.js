const matchMap = require('./index')

test('Using array args', () => {
  const symbol = Symbol()
  expect(matchMap(1)([1, true], [2, false])).toBe(true)
  expect(matchMap(2)([1, true], [2, false])).toBe(false)
  expect(matchMap(symbol)([symbol, true], [2, false])).toBe(true)
})

test('Using map arg', () => {
  const symbol = Symbol()
  expect(matchMap(1)(new Map([[1, true], [2, false]]))).toBe(true)
  expect(matchMap(2)(new Map([[1, true], [2, false]]))).toBe(false)
  expect(matchMap(symbol)(new Map([[symbol, true], [2, false]]))).toBe(true)
})
