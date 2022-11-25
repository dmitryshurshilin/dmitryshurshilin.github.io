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
 * @param {integer} Array of positive numbers 
 * @returns {integer} Max benefit sum
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

module.exports = {
    sum1,
    sum2,
    sum3,
    maxBenefit,
}
