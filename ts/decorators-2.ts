const ORDER_DEFAULT_COST: number = 100
const DELIVERY_DEFAULT_COST = 25
const PACKAGE_DEFAULT_COST = 25

type TOrderItem = string
type TOrderItems = Array<TOrderItem>

interface IOrder {
    items: TOrderItems
    cost(): number
    addItem(item: TOrderItem): void
    getItems(): TOrderItems
}

class Order implements IOrder {
    items: TOrderItems = []

    cost(): number {
        return ORDER_DEFAULT_COST
    }
    addItem(item: TOrderItem): void {
        this.items.push(item)
    }
    getItems(): TOrderItems {
        return this.items
    }
}

const addDelivery = (order: IOrder): void => {
    const cost = order.cost()
    order.addItem('Delivery')
    order.cost = (): number => cost + DELIVERY_DEFAULT_COST
}

const addPackage = (order: IOrder): void => {
    const cost = order.cost()
    order.addItem('Package')
    order.cost = (): number => cost + PACKAGE_DEFAULT_COST
}

const order1 = new Order()
const order2 = new Order()
const order3 = new Order()
addPackage(order3)
addDelivery(order2)
addPackage(order2)
console.log('Order 1:', order1.cost(), 'Items: ', order1.getItems())
console.log('Order 2:', order2.cost(), 'Items: ', order2.getItems())
console.log('Order 3:', order3.cost(), 'Items: ', order3.getItems())