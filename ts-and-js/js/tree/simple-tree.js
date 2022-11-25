"use strict"

class TreeNode {
    constructor(value) {
        this.value = value
        this.descendants = []
    }
}

const abe = new TreeNode('Abe')
const homer = new TreeNode('Homer')
const bart = new TreeNode('Bart')
const lisa = new TreeNode('Lisa')
const maggie = new TreeNode('Maggie')

abe.descendants.push(homer)
homer.descendants.push(bart, lisa, maggie)

const show = (item) => {
    console.log(item.value)
    let descendants = item.descendants
    if (descendants.length > 0) {
        for (let i = 0; i < descendants.length; i++) {
            show(descendants[i])
        }
    }
}

show(abe)
