class LinkedList {
    constructor() {
        this.nodes = [];
    }

    append(val) { this.nodes.push(val) }
    prepend(val) { this.nodes.unshift(val) }
    size(n) { return this.nodes.length }
    head() { return this.nodes[0] }
    tail() { return this.nodes[this.nodes.length - 1] }
    at(i) { return this.nodes[i] }
    pop() { this.nodes.pop() }
    contains(val) { 
        if (this.nodes.includes(val)) { return true }
        else { return false }
    }
    find(val) {
        if (this.nodes.includes(val)) { return this.nodes.indexOf(val) }
        else { return null }
    }
    toString() { return this.nodes.join(' -> ') }
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());
