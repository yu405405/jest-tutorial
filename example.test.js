const sum = require('./example.js')

test('adds 1 + 3 to equal 3', () => {
    expect(sum.sum(1, 2)).toBe(3)
})

const minus = require('./example.js')

test('minus 2 - 1 to equal 1', () => {
    expect(minus.minus(2, 1)).toBe(1)
})
