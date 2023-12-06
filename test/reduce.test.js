import reduce from '../src/reduce'

test('reduces an array of numbers using addition', () => {
    const numbers = [1, 2, 3, 4, 5]
    const sum = reduce(numbers, (acc, num) => acc + num)
    expect(sum).toBe(15)
})

test('reduces an array of strings using concatenation', () => {
    const strings = ['Hello', ' ', 'World', '!']
    const result = reduce(strings, (acc, str) => acc + str)
    expect(result).toBe('Hello World!')
})

test('reduces an array of objects using a custom iteratee', () => {
    const objects = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 }
    ]
    const combinedAges = reduce(objects, (acc, obj) => acc + obj.age, 5)
    expect(combinedAges).toBe(95)
})

test('reduces a non-array input', () => {
    const string = 'Hello World!'
    const result = reduce(string, (acc, char) => acc + char)

    expect(result).toBe(string)
})
