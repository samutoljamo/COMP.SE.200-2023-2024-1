import add from '../src/add'

test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
})

test('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2)
})

test('adds two negative numbers', () => {
    expect(add(-7, -2)).toBe(-9)
})

test('adds zero to a number', () => {
    expect(add(10, 0)).toBe(10)
})

test('adds two decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4)
})

test('returns 0 for two undefined values', () => {
    expect(add(undefined, undefined)).toBe(0)
})

test('returns first value for undefined second value', () => {
    expect(add(1, undefined)).toBe(1)
})

test('returns second value for undefined first value', () => {
    expect(add(undefined, 1)).toBe(1)
})
