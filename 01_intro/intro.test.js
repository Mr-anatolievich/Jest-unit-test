const { sum, nativeNull } = require ('./intro')

describe('Sum function', () => {

    test('should return sum of two values', () => {

        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    }) 
    
    test('should return value correctly comparing to other', () => {
        expect(sum(2, 4)).toBeGreaterThan(5)
        expect(sum(2, 4)).toBeGreaterThanOrEqual(6)
        expect(sum(2, 4)).toBeLessThan(10)
        expect(sum(2, 4)).toBeLessThanOrEqual(10)
    })
    
    test('sould sum two float values correctly', () => {
    
        expect(sum(0.3, 0.7)).toEqual(1)
        expect(sum(0.3, 0.6)).toBe(0.8999999999999999)
        expect(sum(0.3, 0.6)).toBeCloseTo(0.9)
    })
})

describe('NativeNull function', () => {

    test('should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})

