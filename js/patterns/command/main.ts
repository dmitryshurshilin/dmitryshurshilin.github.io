type Order = {
    id: number;
    items: string[];
  }
  
  interface ICommand {
    execute: Function;
  }
  
  class Command {
    execute: Function
  
    constructor(execute: Function) {
      this.execute = execute
    }
  }
  
  class OrderManager {
    orders: Order[]
  
    constructor() {
      this.orders = []
    }
  
    execute(command: ICommand, ...args:any) {
      return command.execute(this.orders, ...args)
    }
  }
  
  class PlaceOrderCommand extends Command {
    constructor(order: Order) {
      super((orders: Order[]) => {
        orders.push(order)
        return console.log(`You have successfully ordered "${order.items.join(', ')}", your order is ${order.id}`)
      })
    }
  }
  
  class CancelOrderCommand extends Command {
    constructor(id: number) {
      super((orders: Order[]) => {
        const orderIndex = orders.findIndex((order: Order) => order.id === id)
        orders.splice(orderIndex, 1)
        return console.log(`You have cancelled your order ${id}`)
      })
    }
  }
  
  class TrackOrderCommand extends Command {
    constructor(id: number) {
      super((orders: Order[]) => {
        const orderIndex = orders.findIndex((order: Order) => order.id === id)
        if (orderIndex > -1) {
          return console.log(`Your order ${id} will arrive in 20 minutes.`)
        }
        return console.log(`Order ${id} not found, check that id is correct, please`)
      })
    }
  }
  
  class TrackActiveOrdersCommand extends Command {
    constructor() {
      super((orders: Order[]) => {
        const activeOrders = orders.map((order) => order.id).join(',')
        return console.log(`Active orders: ${activeOrders}`)
      })
    }
  }
  
  const manager = new OrderManager()
  
  manager.execute(new PlaceOrderCommand({ id: 1, items: ['Pizza', 'Tea', 'Coffee'] }))
  manager.execute(new PlaceOrderCommand({ id: 2, items: ['Coffee'] }))
  manager.execute(new PlaceOrderCommand({ id: 3, items: ['Hamburger', 'Coffee'] }))
  manager.execute(new TrackOrderCommand(1))
  manager.execute(new CancelOrderCommand(1))
  manager.execute(new TrackOrderCommand(1))
  manager.execute(new TrackOrderCommand(2))
  manager.execute(new TrackOrderCommand(3))
  manager.execute(new TrackActiveOrdersCommand())
  