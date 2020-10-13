class Node {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    }
}
class DoubleNode {
    constructor(val, prev, next) {
        this.value = val;
        this.prev = prev;
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
        prependDataOnScreen(newNode.value)
        this.head = newNode;
        this.length++;
    }

    customPop() {
        this.head = this.head.next;
        this.length--;
        removeHeadFromScreen()
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
            // displayDataOnScreen(currentNode.value)
            currentNode = currentNode.next
        }
        console.log("null");

    }


}

class QueueOperations {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    customPush(val) {
        let newNode = new Node(val, this.head);
        prependDataOnScreen(newNode.value);
        this.head = newNode;
        this.length = this.length + 1;
    }

    customPop() {
        let currentNode = this.head;
        for (var i = 2; i < this.length; i++) {
            currentNode = currentNode.next
        }
        console.log(this.head.value)
        console.log(currentNode.next.value)
        currentNode.next = null
        this.length--;
        if (this.length == 0)
            console.log("pop")
        removeTailFromScreen()
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

class SCLL {
    constructor() {
        this.tail = null;
        this.length = 0;
    }

    insertAtHead(val) {
        let newNode;
        if (this.length == 0) {
            newNode = new Node(val, this.tail);
            this.tail = newNode;
        }
        else {
            newNode = new Node(val, this.tail.next);
        }
        prependDataOnScreen(newNode.value);
        this.tail.next = newNode;
        this.length++;
    }

    insertAtTail(val) {
        this.insertAtHead(val);
        removeHeadFromScreen()
        this.tail = this.tail.next
        appendDataOnScreen(this.tail.value)
    }

    deleteHead() {
        this.tail.next = this.tail.next.next;
        this.length--;
        removeHeadFromScreen();
    }
    deleteTail() {
        // Traverse list till second last element
        let secondLastNode = this.tail.next;
        for (var i = 2; i < this.length; i++) {
            secondLastNode = secondLastNode.next;
        }
        console.log(`Second last : ${secondLastNode.value}`)
        secondLastNode.next = this.tail.next;
        this.tail = secondLastNode;
        this.length--;
        removeTailFromScreen()
    }

    searchLinkedlist(val) {
        let currentNode = this.tail.next;
        let index = -1;
        for (var i = 0; i < this.length; i++) {
            if (currentNode.value == val) {
                index = i;
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        if (index == -1) {
            console.log("Not found :(")
        }
        else {
            console.log(`${val} found at index ${index}`)
        }
    }
    display() {
        let currentNode = this.tail.next;
        for (var i = 0; i < this.length; i++) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}
class DCLL {
    constructor() {
        this.tail = null;
        this.length = 0;
    }
    insertAtHead(val) {
        let newNode;
        if (this.length == 0) {
            newNode = new DoubleNode(val, this.tail, this.tail);
            this.tail = newNode;
            this.tail.prev = newNode;
            this.tail.next = newNode;
            console.log(this.tail)
        }
        else {
            newNode = new DoubleNode(val, this.tail, this.tail.next);
            this.tail.next.prev = newNode;
            this.tail.next = newNode;
        }
        prependDataOnScreen(newNode.value);
        this.length++;
    }
    insertAtTail(val) {
        this.insertAtHead(val);
        removeHeadFromScreen();
        this.tail = this.tail.next;
        appendDataOnScreen(val)
    }


    deleteHead() {
        this.tail.next = this.tail.next.next;
        this.tail.next.prev = this.tail;
        this.length--;
        removeHeadFromScreen()
    }

    deleteTail() {
        this.tail.prev.next = this.tail.next;
        this.tail.next.prev = this.tail.prev;
        this.tail = this.tail.prev;
        this.length--;
        removeTailFromScreen();
    }

    searchVal(val) {
        let currentNode = this.tail.next;
        let index = -1;
        for (var i = 0; i < this.length; i++) {
            if (currentNode.value == val) {
                index = i;
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }

        if (index == -1) {
            console.log("Not found ");
        }
        else {
            console.log(`${val} found at index ${index}`)
        }
    }
    display() {
        let currentNode = this.tail.next;
        for (var i = 0; i < this.length; i++) {
            console.log(currentNode.value)
            currentNode = currentNode.next;
        }

    }
}

function testStack() {
    const stack = new StackOperations;
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
// testStack()

function testSingleCircular() {
    let singlyLinked = new SCLL;
    singlyLinked.insertAtHead(1)
    singlyLinked.insertAtHead(2)
    singlyLinked.insertAtTail(0)
    singlyLinked.insertAtHead(4)

    singlyLinked.insertAtHead(3)
    singlyLinked.insertAtTail(-1)

    singlyLinked.display()

    singlyLinked.insertAtHead(4)
    console.log("Second siplay")
    singlyLinked.display()
    singlyLinked.deleteTail()
    singlyLinked.deleteHead()
    console.log("third")

    singlyLinked.display()
    singlyLinked.deleteTail()
    console.log("third")
    singlyLinked.insertAtHead(4)
    singlyLinked.insertAtTail(0)

    singlyLinked.display()
    singlyLinked.searchLinkedlist(4)
}
// testCircular();

function testDoubleCircular() {
    let doublyLinked = new DCLL;
    doublyLinked.insertAtTail(0)
    doublyLinked.insertAtHead(1)
    doublyLinked.insertAtHead(2)
    doublyLinked.insertAtHead(3)
    doublyLinked.insertAtHead(4)
    doublyLinked.insertAtHead(5)
    doublyLinked.insertAtTail(-1)
    doublyLinked.insertAtHead(6)
    doublyLinked.deleteHead()
    doublyLinked.deleteTail()
    doublyLinked.insertAtHead(6)
    doublyLinked.insertAtTail(-1)
    doublyLinked.display()
    doublyLinked.searchVal(-1)

}
// testDoubleCircular()



// Data display and remove functions
let outputArea = document.querySelector(".outputArea");
function prependDataOnScreen(data) {
    let dataDiv = document.createElement("div");
    let dataVal = document.createElement("div");
    let nextVal = document.createElement("div");
    dataVal.innerText = data;
    dataDiv.classList.add("memBlock")
    dataVal.classList.add("data");
    nextVal.classList.add("next");
    dataDiv.appendChild(dataVal);
    dataDiv.appendChild(nextVal);
    outputArea.prepend(dataDiv);
}
function appendDataOnScreen(data) {
    let dataDiv = document.createElement("div");
    let dataVal = document.createElement("div");
    let nextVal = document.createElement("div");
    dataVal.innerText = data;
    dataVal.classList.add("data");
    nextVal.classList.add("next");
    dataDiv.appendChild(dataVal);
    dataDiv.appendChild(nextVal);
    outputArea.append(dataDiv);
}
function removeHeadFromScreen() {
    document.querySelector(".data").remove()
}
function removeTailFromScreen() {
    document.querySelectorAll(".data")[document.querySelectorAll(".data").length - 1].remove()
}
if (document.querySelector(".stack")) {
    // Assign variable values
    let push = document.querySelector("#push")
    let pushInput = document.querySelector("#push input")
    let pop = document.querySelector("#pop")
    let pushBtn = document.querySelector("#push-btn")
    let searchBtn = document.querySelector("#search-btn")
    let searchInput = document.querySelector("#search input")
    let search = document.querySelector("#search")
    function stackDisplay() {
        // Original Stack
        let stack = new QueueOperations;
        stack.customPush(1);
        stack.customPush(2);
        stack.customPush(3);
        // event listeners
        pushBtn.addEventListener("click", () => {
            if (!isNaN(pushInput.value) && pushInput.value) {
                stack.customPush(pushInput.value)
                stack.display();
            }
        })
        pop.addEventListener("click", () => {
            stack.customPop();
            stack.display();
        })
        searchBtn.addEventListener("click", () => {
            if (!isNaN(searchInput.value) && searchInput.value) {
                stack.search(searchInput.value)
            }
        })
    }
}


let pushHead = document.querySelector("#pushHead")
document.addEventListener("DOMContentLoaded", () => {
    stackDisplay()
})

