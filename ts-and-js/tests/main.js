"use strict"

const sum1 = (num) => {
    if (num === 0) {
        return num
    }
    return num + sum1(num - 1)
}

const sum2 = (items) => {
    return items.reduce((sum, current) => {
        if (Array.isArray(current)) {
            return sum + sum2(current)
        }
        return sum + current
    }, 0)
}

const sum3 = (obj) => {
    let sum = 0
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            sum += sum3(obj[prop])
        }
        else {
            sum += obj[prop]
        }
    }
    return sum
}

/**
 * There is an array of positive numbers (length is N) with product prices on duration of N days.
 * We produce one more product every day. There is a storehouse where products can be stored.
 * Calculate the max benefit we can have selling the produced products.
 * Take into consideration that all the products should be selled till the end of N days
 * @param {number[]} arr - Array of positive numbers 
 * @returns {number} Max benefit sum
 */
const maxBenefit = (arr) => {
    const n = arr.length
    let prevMaximum = 0
    let res = 0

    for (let i = n-1; i >= 0; i--) {
        if (arr[i] > prevMaximum) {
            prevMaximum = arr[i]
        }
        res += prevMaximum
    }

    return res;
}

/**
 * Implement a difference function, which subtracts one list from another and returns the result.
 * It should remove all values from list a, which are present in list b keeping their order.
 * @param {any[]} array1 - First array
 * @param {any[]} array2 - Second array
 * @returns {any[]} - Result array
 */
const arrayDiff = (array1, array2) => {
    return array1.filter((item) => array2.indexOf(item) === -1)
}
/**
 * Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
 * and returns the maximum number of cakes Pete can bake (integer).
 * For simplicity there are no units for the amounts
 * (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
 * Ingredients that are not present in the objects, can be considered as 0.
 * @param {Object} recipe - Recipe's object
 * @param {Object} available - Available ingredients object 
 * @returns {number} Max count of bakes for recipe & available
 */
const bakeCakes = (recipe, available) => {
    let maxCakesCount = []
    for (let ingredient in recipe) {
        maxCakesCount.push(
            available[ingredient] ? Math.floor(available[ingredient] / recipe[ingredient]) : 0
        )
    }
    return Math.min.apply(null, maxCakesCount)
}
/**
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 * @param {number[]} numbers - Array of numbers
 * @returns {string} Numbers in the form of a phone number
 */
const createPhoneNumber = (numbers) => {
    const format = '(xxx) xxx-xxxx'
    return numbers.reduce((format, number) => format.replace('x', number), format)
}

module.exports = {
    sum1,
    sum2,
    sum3,
    maxBenefit,
    arrayDiff,
    bakeCakes,
    createPhoneNumber,
}
