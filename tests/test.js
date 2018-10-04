const getDayEnding = require('../index')

test('test \'st\' number', () => {
  expect(getDayEnding.getDayEndingFromNumber(1)).toBe('st')
})

test('test \'nd\'', () => {
  expect(getDayEnding.getDayEndingFromNumber(2)).toBe('nd')
})

test('test \'rd\'', () => {
  expect(getDayEnding.getDayEndingFromNumber(3)).toBe('rd')
})

test('test \'th\'', () => {
  expect(getDayEnding.getDayEndingFromNumber(4)).toBe('th')
})

test('test default return without specifying', () => {
  expect(getDayEnding.getDayEndingFromNumber(32)).toBe('')
})

test('test default while specifying', () => {
  expect(getDayEnding.getDayEndingFromNumber(32, 'none')).toBe('none')
})
