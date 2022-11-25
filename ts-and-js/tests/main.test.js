const {
    sum1,
    sum2,
    sum3,
    maxBenefit,
    arrayDiff,
    bakeCakes,
    createPhoneNumber,
} = require('./main')

/**
 * testing of sum1
 */

test(`Sum of all numbers from 0 to 5 is expected to be 15`, () => {
    expect(sum1(5)).toBe(15)
})
test(`Sum of all numbers from 0 to 6 is expected to be 21`, () => {
    expect(sum1(6)).toBe(21)
})

/**
 * testing of sum2
 */
test(`Sum of elements of array [1, 2, 3, 4, 5] is expected to be 15`, () => {
    expect(sum2([1, 2, 3, 4, 5])).toBe(15)
})
test(`Sum of elements of array [[1, 2, 3], 4, 5] is expected to be 15`, () => {
    expect(sum2([[1, 2, 3], 4, 5])).toBe(15)
})
test(`Sum of elements of array [1, [2, [3, 4], 5]] is expected to be 15`, () => {
    expect(sum2([1, [2, [3, 4], 5]])).toBe(15)
})

/**
 * testing of sum3
 */
test(`Sum of values of object {a: 1, b: 2, c: 3, d: 4, e: 5} is expected to be 15`, () => {
    expect(sum3({ a: 1, b: 2, c: 3, d: 4, e: 5 })).toBe(15)
})
test(`Sum of values of object {a: 1, b: {c: 2, d: {e: 3, f: 4, g: 5 }}} is expected to be 15`, () => {
    expect(sum3({ a: 1, b: { c: 2, d: { e: 3, f: 4, g: 5 } } })).toBe(15)
})
test(`Sum of values of object {a: {b: {c: {d: {e: 1, f: 2, g: 3, h: 4, i: 5}}}}} is expected to be 15`, () => {
    expect(sum3({ a: { b: { c: { d: { e: 1, f: 2, g: 3, h: 4, i: 5 } } } } })).toBe(15)
})

/**
 * testing of maxBenefit
 */
test(`Max sum of [1, 2, 3, 1] is expected to be 10`, () => {
    expect(maxBenefit([1, 2, 3, 1])).toBe(10)
})
test(`Max sum of [1, 2, 3, 4] is expected to be 16`, () => {
    expect(maxBenefit([1, 2, 3, 4])).toBe(16)
})
test(`Max sum of [1, 1, 1, 1] is expected to be 4`, () => {
    expect(maxBenefit([1, 1, 1, 1])).toBe(4)
})
test(`Max sum of [4, 1, 1, 1] is expected to be 7`, () => {
    expect(maxBenefit([4, 1, 1, 1])).toBe(7)
})

/**
 * testing of arrayDiff
 */
test(`Difference between [1, 2, 3] and [1] is expexted to be [2, 3]`, () => {
    expect(arrayDiff([1, 2, 3], [1])).toEqual([2, 3])
})
test(`Difference between [1, 2, 3, 4, 5, 6] and [1, 3, 7] is expexted to be [2, 4, 5, 6]`, () => {
    expect(arrayDiff([1, 2, 3, 4, 5, 6], [1, 3, 7])).toEqual([2, 4, 5, 6])
})

/**
 * testing of bakeCakes
 */
 test(`Bakes count for recipe 1 is expected to be 2`, () => {
    let recipe = {flour: 500, sugar: 200, eggs: 1}
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
    expect(bakeCakes(recipe, available)).toBe(2)
})
test(`Bakes count for recipe 2 is expected to be 0`, () => {
    let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}
    let available = {sugar: 500, flour: 2000, milk: 2000}
    expect(bakeCakes(recipe, available)).toBe(0)
})
test(`Bakes count for recipe 3 is expected to be 1`, () => {
    let recipe = {flour: 300, sugar: 150, milk: 100, oil: 100}
    let available = {sugar: 500, flour: 2000, milk: 2000, oil: 100}
    expect(bakeCakes(recipe, available)).toBe(1)
})

/**
 * testing of createPhoneNumber
 */
describe('createPhoneNumber' , () => {
    test('Result for [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] is (123) 456-7890', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890')
    })
    test('Result for [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] is (111) 111-1111', () => {
        expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe('(111) 111-1111')
    })
})
