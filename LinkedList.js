class Node {
    constructor (value = null) {
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    //Insert the Node at end
    append (value) {
        const newNode = new Node(value)
        
        if (!this.head) { //First node
            this.head = newNode
        } else { //Not first node
            let current = this.head //Use reference pointer
            while (current.nextNode) {
                current = current.nextNode
            }
            current.nextNode = newNode
        }
    }
}