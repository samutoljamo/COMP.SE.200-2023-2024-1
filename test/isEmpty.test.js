import isEmpty from '../src/isEmpty'

test('returns true for null', () => {
    expect(isEmpty(null)).toBe(true)
})

test('returns true for true', () => {
    expect(isEmpty(true)).toBe(true)
})

test('returns true for 1', () => {
    expect(isEmpty(1)).toBe(true)
})

test('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
})

test('returns false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false)
})

test('returns false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
})

test('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true)
})

test('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true)
})

test('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true)
})

test('returns true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
})

test('returns true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true)
})

test('returns true for empty prototype object', () => {
    expect(isEmpty(Object.create(null))).toBe(true)
})

test('returns false for non-empty prototype object', () => {
    expect(isEmpty(Object.create({ a: 1 }))).toBe(false)
})

test('returns true for empty buffer', () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true)
})

test('returns false for non-empty buffer', () => {
    expect(isEmpty(Buffer.alloc(1))).toBe(false)
})

test('returns true for empty typed array', () => {
    expect(isEmpty(new Uint8Array())).toBe(true)
})

test('returns false for non-empty typed array', () => {
    expect(isEmpty(new Uint8Array(1))).toBe(false)
})

test('returns true for empty arguments', () => {
    expect(isEmpty((function () { return arguments })())).toBe(true)
})

test('returns false for non-empty arguments', () => {
    expect(isEmpty((function () { return arguments })(1))).toBe(false)
})
