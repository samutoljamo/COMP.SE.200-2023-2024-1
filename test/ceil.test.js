import ceil from '../src/ceil'

test('rounds up a positive number to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5)
})

test('rounds up a positive number to the specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
})

test('rounds up a positive number to the nearest multiple of 100', () => {
    expect(ceil(6040, -2)).toBe(6100)
})

test('rounds up a negative number to the nearest integer', () => {
    expect(ceil(-4.006)).toBe(-4)
})

test('rounds up a negative number to the specified precision', () => {
    expect(ceil(-6.004, 2)).toBe(-6)
})

test('rounds up a negative number to the nearest multiple of 100', () => {
    expect(ceil(-6040, -2)).toBe(-6000)
})

test('rounds up zero to zero', () => {
    expect(ceil(0)).toBe(0)
})

test('rounds up zero to the specified precision', () => {
    expect(ceil(0, 2)).toBe(0)
})
