const cars: Array<string> = ['BMW', 'Audi', 'Ford']

// - - - - - - - - 

const promiseOne = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Promise is resolved')
    }, 2000)
})
promiseOne.then((data) => console.log(data))

// - - - - - - - - 

const promiseTwo: Promise<number> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1500)
    }, 2000)
})
promiseTwo.then((data) => console.log(data))

// - - - - - - - - 

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const a = { name: 'Dmitry', surname: 'Ivanov' }
const b = { age: 25, city: 'Omsk' }
const merged1 = mergeObjects(a, b)
console.log(merged1)
console.log(merged1.name)
console.log(merged1.city)

const c = { make: 'BMW', model: 'X5' }
const d = { year: 2021 }
const merged2 = mergeObjects(c, d)
console.log(merged2)
console.log(merged2.make)
console.log(merged2.model)

// - - - - - - - - 

interface ILength {
    length: number;
}

function getCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `The parameter's length is ${value.length}`
    }
}
console.log(getCount([1, 2, 3]))
console.log(getCount('Hi, Typescript'))
console.log(getCount({ foo: 'bar', length: 100 }))

// - - - - - - - - 

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const car = {
    make: 'BMW',
    model: 'X5',
}
console.log(getObjectValue(car, 'make'))
console.log(getObjectValue(car, 'model'))
console.log(getObjectValue(car, 'year')) // TS Error because there is no 'year' in the 'car' object

// - - - - - - - - 

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) { }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items() {
        return this._items
    }
}

const strings = new Collection<string>(['foo', 'bar', 'baz'])
strings.add('qux')
strings.remove('bar')
console.log(strings.items)

const numbers = new Collection<number>([100, 200, 300])
numbers.add(400)
numbers.remove(300)
console.log(numbers.items)

const objects = new Collection([{ a: 1 }, { b: 2 }]) // TS Error because T must be a primitive type

// - - - - - - - - 

interface ICar {
    make: string;
    model: string;
    year: number;
}

function createAndValidateCar(make: string, model: string, year: number): ICar {
    const car: Partial<ICar> = {}

    if (make.length > 3) car.make = make
    if (model.length > 3) car.model = model
    if (year > 2000) car.year = year

    return car as ICar
}

// - - - - - - - - 

const carsArray: Readonly<Array<string>> = ['BMW', 'Audi']
carsArray.shift()  // TS Error because carsArray is Readonly
console.log(carsArray)

const bmw: Readonly<ICar> = {
    make: 'BMW',
    model: 'X5',
    year: 2021,
}
bmw.model = 'Audi' // TS Error because bmw is Readonly
