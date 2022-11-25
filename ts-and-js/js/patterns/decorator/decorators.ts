interface ComponentDecorator {
    selector: string;
    template: string;
}

function Component(config: ComponentDecorator) {
    return function <T extends { new(...args: any[]): object }>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)
                document.querySelector(config.selector)!.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: '#blockParent',
    template: `
      <div class="block">
        <h2 class="block-title">Default Block Title</div>
        <div class="block-content">Lorem ipsum</div>
      </div>
     `
})
class BlockComponent {
    constructor(public title: string) {
        this.title = title
    }

    logTitle(): void {
        console.log(`Component's name is ${this.title}`)
    }
}

const component = new BlockComponent('Block Title')
