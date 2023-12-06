import every from '../src/every'

test('returns true for an empty array', () => {
    expect(every([], Boolean)).toBe(true)
})

test('returns true if all elements pass the predicate check', () => {
    expect(every([true, 1, 'yes'], Boolean)).toBe(true)
})

test('returns false if any element fails the predicate check', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false)
})

test('returns true if all elements are greater than 0', () => {
    expect(every([1, 2, 3], (value) => value > 0)).toBe(true)
})

test('returns false if any element is less than 0', () => {
    expect(every([1, 2, -3], (value) => value > 0)).toBe(false)
})
