class Node {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    }
}

class StackOperations {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    customPush(val) {
        let newNode = new Node(val, this.head);
        this.head = newNode;
        this.length = this.length + 1;
    }

    customPop() {
        this.head = this.head.next;
        this.length--;
    }

    search(val) {
        let currentNode = this.head;
        let index = 0;
        let found = false;
        for (var i = 0; i < this.length; i++) {
            if (currentNode.value == val) {
                found = true;
                console.log(`${val} found at index ${index}`)
                break;
            }
            else {
                currentNode = currentNode.next;
                index++;
            }
        }
        if (!found)
            console.log('Not found')
    }
    display() {
        let currentNode = this.head

        for (var i = 0; i < this.length; i++) {
            console.log(`${currentNode.value} -> `)
            currentNode = currentNode.next
        }
        console.log("null");

    }


}

class QueueOperations {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    customPush(val) {
        let newNode = new Node(val, this.head);
        this.head = newNode;
        this.length = this.length + 1;
    }

    customPop() {
        let currentNode = this.head;
        for (var i = 2; i < this.length; i++) {
            currentNode = currentNode.next
        }

        currentNode.next = null
        this.length--;
        console.log("pop")
    }

    search(val) {
        let currentNode = this.head;
        let index = 0;
        let found = false;
        for (var i = 0; i < this.length; i++) {
            if (currentNode.value == val) {
                found = true;
                console.log(`${val} found at index ${index}`)
                break;
            }
            else {
                currentNode = currentNode.next;
                index++;
            }
        }
        if (!found)
            console.log('Not found')
    }
    display() {
        let currentNode = this.head
        // console.log(`ome ${this.tail.next}`)
        for (var i = 0; i < this.length; i++) {
            console.log(`${currentNode.value} -> `)
            currentNode = currentNode.next
        }
        console.log("null");

    }


}

function testStack() {
    const stack = new QueueOperations;
    stack.customPush(1)
    stack.customPush(2)
    stack.customPush(3)
    stack.display()
    stack.customPop()
    console.log("second display")
    stack.display()
    stack.customPush(3)
    console.log("second display")
    stack.display()
    stack.search(2)
}
testStack()