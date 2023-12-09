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

test('returns NaN for a symbol', () => {
    const symbol = Symbol('abc')
    expect(toNumber(symbol)).toBeNaN()
})

test('returns NaN for an object', () => {
    const object = { a: 1 }
    expect(toNumber(object)).toEqual(NaN)
})

test('returns value for object with numeric valueOf method', () => {
    expect(toNumber({ valueOf: () => 1 })).toEqual(1)
})

test('returns NaN for object with non-numeric valueOf method', () => {
    expect(toNumber({ valueOf: () => 'abc' })).toEqual(NaN)
})

test('returns NaN for an invalid hexademical string', () => {
    const invalidHexString = '-0x123'
    expect(toNumber(invalidHexString)).toBeNaN()
})

test('converts a valid octal string to a number', () => {
    expect(toNumber('0o10')).toEqual(8)
})

test('returns NaN for an invalid octal string', () => {
    expect(toNumber('0o18')).toEqual(NaN)
})

test('returns NaN for an invalid binary string', () => {
    expect(toNumber('0b05')).toEqual(NaN)
})

test('converts a valid binary string to a number', () => {
    expect(toNumber('0b10')).toEqual(2)
})
