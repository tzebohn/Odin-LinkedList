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

    //Returns first node
    head () {
        return this.head 
    }
    
    //Returns last node
    tail () {
        let current = this.head
        
        while (current.nextNode) {
            current = current.nextNode
        }
        
        return current
    }

    //Returns the node at given index
    at (index) {
        if (index < 0) return null
        
        let current = this.head
        let count = 0
        while(current) {
            if (count === index) return current
            current = current.nextNode
            count++
        }
        return null //Node not found
    }

    //Removes the last node
    pop () {
        
        //List can be empty
        if (!this.head) return;
        
        //List only has one node
        if (!this.head.nextNode) {
            this.head = null
        }
        
        //List have multiple nodes
        let current = this.head
        let previous = null
        
        while (current.nextNode) {
            previous = current
            current = current.nextNode
        }
        
        previous.nextNode = null
    }

    //Returns boolean if list contains value
    contains (value) {
        if (!this.head) return false
        
        let current = this.head
        while (current) {
            if (current.value === value) return true
            current = current.nextNode
        }
        
        return false
    }
}