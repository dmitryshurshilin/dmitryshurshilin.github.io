// Task #1
// What result will be in console? Explain the answer.
// source: https://habr.com/ru/company/ruvds/blog/340194/
const arr = [1, 2, 3, 4]
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i])
    }, 1000)
}

// Task #2
// What result will be in console? Explain the answer.
// source: https://betterprogramming.pub/10-javascript-closure-challenges-explained-with-diagrams-c964110805e7
var a = 1
function foo() {
    console.log(a)
}

function bar() {
    var a = 2
    foo()
}

bar()

// Task #3
// What result will be in console? Explain the answer.
// source: https://betterprogramming.pub/10-javascript-closure-challenges-explained-with-diagrams-c964110805e7
var a = 10

function bar() {
    var a = 20

    function foo() {
        console.log(a)
    }

    foo()
}

bar()


// Task #4
// What result will be in console? Explain the answer.
const a = 1

function logFn() {
    console.log(a)
}

const obj = {
    a: 2,
    method(callback) {
        callback()
    },
}

obj.method(logFn)

// Task #5
// What result will be in console? Explain the answer.
// source: https://betterprogramming.pub/10-javascript-closure-challenges-explained-with-diagrams-c964110805e7
function createCounter() {
    let count = 0
    function increase() {
        count++
    }
    let message = `Count is ${count}`

    function log() {
        console.log(message)
    }

    return [increase, log]
}
const [increase, log] = createCounter()
increase()
increase()
increase()
log()