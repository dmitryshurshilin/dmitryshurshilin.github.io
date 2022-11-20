function DecoratorForClass(constructor: Function) {
    console.log(constructor)
  }

  function DecoratorForProperty(target: any, propName: string | Symbol) {
    console.log(target)
    console.log(propName)
  }

  function DecoratorForMethod(target: any, propName: string | Symbol, descriptior: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptior)
  }

  @DecoratorForClass
  class Component {
    @DecoratorForProperty
    name: string

    constructor(name: string) {
      this.name = name
    }

    @DecoratorForMethod
    logName():void {
      console.log(`Component's name is ${this.name}`)
    }
  }
