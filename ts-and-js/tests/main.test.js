const {
    sum1,
    sum2,
    sum3,
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
