import toNumber from '../src/toNumber'

test('converts a valid hexadecimal string to a number', () => {
    const hexString = '0xFF'
    const result = toNumber(hexString)
    expect(result).toBe(255)
})

test('converts a valid decimal string to a number', () => {
    const decimalString = '123.45'
    const result = toNumber(decimalString)
    expect(result).toBe(123.45)
})

test('converts a valid negative number string to a negative number', () => {
    const negativeString = '-42'
    const result = toNumber(negativeString)
    expect(result).toBe(-42)
})

test('returns NaN for an invalid number string', () => {
    const invalidString = 'abc'
    const result = toNumber(invalidString)
    expect(result).toBeNaN()
})

test('returns NaN for a string with leading or trailing whitespace', () => {
    const whitespaceString = '  42  '
    const result = toNumber(whitespaceString)
    expect(result).toBeNaN()
})
