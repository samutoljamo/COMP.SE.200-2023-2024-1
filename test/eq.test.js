import eq from '../src/eq'

test('compares two equivalent objects', () => {
    const object1 = { a: 1 }
    const object2 = { a: 1 }
    expect(eq(object1, object1)).toBe(true)
    expect(eq(object1, object2)).toBe(false)
})

test('compares two equivalent strings', () => {
    expect(eq('a', 'a')).toBe(true)
    expect(eq('a', Object('a'))).toBe(false)
})

test('compares two NaN values', () => {
    expect(eq(NaN, NaN)).toBe(true)
})

test('compares different values', () => {
    expect(eq(1, '1')).toBe(false)
    expect(eq(null, undefined)).toBe(false)
    expect(eq(true, false)).toBe(false)
})
