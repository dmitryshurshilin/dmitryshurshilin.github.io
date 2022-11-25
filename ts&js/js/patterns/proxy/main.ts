interface IOrder {
    id: number;
    items: string;
}

type NumberOrString = number | string

const orderProxyHandler = {
    get: (obj: IOrder, propName: string): NumberOrString => {
        console.log(`Proxy :: the value of ${propName} is ${obj[propName]}`)
        return obj[propName]
    },
    set: (obj: IOrder, propName: string, newValue: NumberOrString): boolean => {
        console.log(`Proxy :: changed ${propName} from ${obj[propName]} to ${newValue}`)
        obj[propName] = newValue
        return true
    }
}

const order = {
    id: 1,
    items: 'Pizza, hamburger and coffee',
}

const proxedOrder = new Proxy(order, orderProxyHandler)
console.log(proxedOrder.id)
console.log(proxedOrder.items)
proxedOrder.items = 'Pizza, 2 hamburgers and coffee'
console.log(proxedOrder.items)
