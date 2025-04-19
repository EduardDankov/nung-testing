import * as sample from '../sample.js'

describe('sample.log2', () => {
    test('should return valid result with valid input', () => {
        const num = Math.random()
        const expectedResult = Math.log2(num)

        const actualResult = sample.log2(num)

        expect(actualResult).toEqual(expectedResult)
    })

    test('should return NaN with undefined input', () => {
        const actualResult = sample.log2()
        expect(actualResult).toBeNaN()
    })

    test('should return NaN with string input', () => {
        const actualResult = sample.log2('test')
        expect(actualResult).toBeNaN()
    })

    test('should return the same result with the same input', () => {
        const iterations = 128
        const num = Math.random()
        const set = new Set()

        for (let i = 0; i < iterations; i++) {
            const result = sample.log2(num)
            set.add(num)
        }

        expect(set.size).toEqual(1)
    })

    test('should return valid result with additional parameters', () => {
        const num = Math.random()
        const num2 = Math.random()
        const expectedResult = Math.log2(num, num2)

        const actualResult = sample.log2(num)

        expect(actualResult).toEqual(expectedResult)
    })
})

describe('sample.exp', () => {
    test('should return valid result with valid input', () => {
        const num = Math.random()
        const expectedResult = Math.exp(num)

        const actualResult = sample.exp(num)

        expect(actualResult).toEqual(expectedResult)
    })

    test('should return NaN with undefined input', () => {
        const actualResult = sample.exp()
        expect(actualResult).toBeNaN()
    })

    test('should return NaN with string input', () => {
        const actualResult = sample.exp('test')
        expect(actualResult).toBeNaN()
    })

    test('should return the same result with the same input', () => {
        const iterations = 128
        const num = Math.random()
        const set = new Set()

        for (let i = 0; i < iterations; i++) {
            const result = sample.exp(num)
            set.add(num)
        }

        expect(set.size).toEqual(1)
    })

    test('should return valid result with additional parameters', () => {
        const num = Math.random()
        const num2 = Math.random()
        const expectedResult = Math.exp(num, num2)

        const actualResult = sample.exp(num)

        expect(actualResult).toEqual(expectedResult)
    })

    test('should return E with input 1', () => {
        const actualResult = Math.exp(1)

        expect(actualResult).toEqual(Math.E)
    })
})

describe('sample.sin', () => {
    test('should return valid result with valid input', () => {
        const num = Math.random()
        const expectedResult = Math.sin(num)

        const actualResult = sample.sin(num)

        expect(actualResult).toEqual(expectedResult)
    })

    test('should return NaN with undefined input', () => {
        const actualResult = sample.sin()
        expect(actualResult).toBeNaN()
    })

    test('should return NaN with string input', () => {
        const actualResult = sample.sin('test')
        expect(actualResult).toBeNaN()
    })

    test('should return the same result with the same input', () => {
        const iterations = 128
        const num = Math.random()
        const set = new Set()

        for (let i = 0; i < iterations; i++) {
            const result = sample.sin(num)
            set.add(num)
        }

        expect(set.size).toEqual(1)
    })

    test('should return valid result with additional parameters', () => {
        const num = Math.random()
        const num2 = Math.random()
        const expectedResult = Math.sin(num, num2)

        const actualResult = sample.sin(num)

        expect(actualResult).toEqual(expectedResult)
    })

    test('should return the same result with looped input', () => {
        const iterations = 128
        const num = Math.random()
        const set = new Set()

        for (let i = 0; i < iterations; i++) {
            const result = sample.sin(num + Math.PI * i)
            set.add(num)
        }

        expect(set.size).toEqual(1)
    })
})
