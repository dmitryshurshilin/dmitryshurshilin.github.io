// Basic examples with overload

function foo(): string
function foo(a: string): string
function foo(a: number, b: number): number
function foo(a?: string | number, b?: number): string | number {
    if (!a && !b) {
        return 'Empty'
    }
    if (typeof a === 'string') {
        return a.toUpperCase()
    }
    if (typeof a === 'number' && typeof b == 'number') {
        return a + b
    }
    return 'Error'
}

foo()           // Empty parameter, returns 'Empty'
foo('string')   // String parameter, return uppercased: returns 'STRING'
foo(1, 2)       // Two number parameters, returns the sum of them: returns 3
foo({ a: 1 })   // Error
foo(1)          // Error
foo(1, '2')     // Error
foo('1', '2')   // Error