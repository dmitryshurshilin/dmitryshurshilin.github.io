"use strict"

const sum1 = (num) => {
    if (num === 0) {
        return num
    }
    return num + sum1(num - 1)
}

console.log(sum1(6))

const sum2 = (items) => {
    return items.reduce((sum, current) => {
        if (Array.isArray(current)) {
            return sum + sum2(current)
        }
        return sum + current
    }, 0)
}

console.log(sum2([1, 2, 3, 4, 5, 6]))
console.log(sum2([1, 2, 3, [4, 5], 6]))
console.log(sum2([1, 2, 3, [4, 5, [6]]]))
console.log(sum2([[1, 2], 3, [4, 5, [6]]]))

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

console.log(sum3({
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5,
            h: 6,
        },
    },
}))
console.log(sum3({
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: 5,
        g: 6,
    },
}))
console.log(sum3({
    a: {
        b: {
            c: {
                d: {
                    e: 1,
                    f: 2,
                    g: 3,
                    h: 4,
                    i: 5,
                    j: 6,
                },
            },
        },
    },
}))
