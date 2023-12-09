import filter from '../src/filter'

test('filters array based on the provided predicate', () => {
    const users = [
        { user: 'barney', active: true },
        { user: 'fred', active: false }
    ]

    const filteredUsers = filter(users, ({ active }) => active)
    expect(filteredUsers).toEqual([{ user: 'barney', active: true }])
})

test('returns an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5]

    const filteredNumbers = filter(numbers, (num) => num > 10)
    expect(filteredNumbers).toEqual([])
})

test('returns a new array with filtered elements', () => {
    const numbers = [1, 2, 3, 4, 5]

    const filteredNumbers = filter(numbers, (num) => num % 2 === 0)
    expect(filteredNumbers).toEqual([2, 4])
})

test('returns an empty array for null', () => {
    expect(filter(null, Boolean)).toEqual([])
})
