const Lodash = require('./sync')
const _ = new Lodash()

describe('Lodash: compact', () => {

    let array

    beforeEach(() => {
        array = [false, 42, 0, null, true, "", "hello"]
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should remove falsy value from array', () => {
        const result = [42, true, "hello"]
        expect(_.compact(array)).toEqual(result)
    })

    test('should not contains falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain("")
        expect(_.compact(array)).not.toContain(0)
    })
})

describe('Lodash: groupBy', () => {
    
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.5, 4.5, 4.1, 3.8, 3.5]
        const result = {
            2: [2.2, 2.5],
            3: [3.8, 3.5],
            4: [4.5, 4.1]
        }

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            5: ['three'],
            3: ['one', 'two'],
        }

        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})