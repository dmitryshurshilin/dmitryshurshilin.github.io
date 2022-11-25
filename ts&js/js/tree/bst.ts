const LEFT = 0
const RIGHT = 1

class TreeNode {
    value: number
    descendants: TreeNode[]
    parent: any

    constructor(value: number) {
        this.value = value
        this.descendants = []
        this.parent = null
    }

    get left():TreeNode {
        return this.descendants[LEFT]
    }

    set left(node: TreeNode) {
        this.descendants[LEFT] = node
        if (node) {
            node.parent = this
        }
    }

    get right():TreeNode {
        return this.descendants[RIGHT]
    }

    set right(node: any) {
        this.descendants[RIGHT] = node
        if (node) {
            node.parent = this
        }
    }
}