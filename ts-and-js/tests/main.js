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

module.exports = {
    sum1,
    sum2,
    sum3,
}
