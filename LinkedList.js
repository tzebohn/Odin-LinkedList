class Node {
    constructor (value = null) {
        this.value = value
        this.nextNode = null
    }
}

export class LinkedList {
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

    //Insert the Node at start
    prepend (value) {
        const newNode = newNode(value)
        newNode.nextNode = this.head
        this.head = newNode
    }

    //Returns number of nodes in list
    size () {
        if (!this.head) return 0 
        
        let current = this.head
        let count = 1
        while (current.nextNode) {
            current = current.nextNode
            count++
        }
        return count
    }
}