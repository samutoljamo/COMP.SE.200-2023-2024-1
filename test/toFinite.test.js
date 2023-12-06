import toFinite from '../src/toFinite'

test('converts a positive number to a finite number', () => {
    expect(toFinite(3.2)).toBe(3.2)
})

test('converts Number.MIN_VALUE to a finite number', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324)
})

test('converts Infinity to the maximum finite number', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308)
})

test('converts a string representation of a number to a finite number', () => {
    expect(toFinite('3.2')).toBe(3.2)
})

test('converts null to 0', () => {
    expect(toFinite(null)).toBe(0)
})

test('converts undefined to 0', () => {
    expect(toFinite(undefined)).toBe(0)
})

test('converts NaN to 0', () => {
    expect(toFinite(NaN)).toBe(0)
})

test('converts true to 1', () => {
    expect(toFinite(true)).toBe(1)
})

test('converts false to 0', () => {
    expect(toFinite(false)).toBe(0)
})
