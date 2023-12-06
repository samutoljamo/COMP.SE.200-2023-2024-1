import upperFirst from '../src/upperFirst'

test('converts the first character of a lowercase string to uppercase', () => {
    const result = upperFirst('fred')
    expect(result).toBe('Fred')
})

test('does not change the first character of an already uppercase string', () => {
    const result = upperFirst('FRED')
    expect(result).toBe('FRED')
})

test('converts the first character of an empty string to uppercase', () => {
    const result = upperFirst('')
    expect(result).toBe('')
})

test('converts the first character of a string with special characters to uppercase', () => {
    const result = upperFirst('@hello')
    expect(result).toBe('@Hello')
})
