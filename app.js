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
        prependDataOnScreen("stackArea", newNode.value)
        this.head = newNode;
        this.length++;
    }

    customPop() {
        this.head = this.head.next;
        this.length--;
        removeHeadFromScreen("stackArea")
        this.display()
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
        prependDataOnScreen("queueArea", newNode.value);
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
        removeTailFromScreen("queueArea")
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
        prependDataOnScreen("csllArea", newNode.value);
        this.tail.next = newNode;
        this.length++;
    }

    insertAtTail(val) {
        this.insertAtHead(val);
        removeHeadFromScreen("csllArea")
        this.tail = this.tail.next
        appendDataOnScreen("csllArea", this.tail.value)
    }

    deleteHead() {
        this.tail.next = this.tail.next.next;
        this.length--;
        removeHeadFromScreen("csllArea");
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
        removeTailFromScreen("csllArea")
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
        prependDataOnScreen("cdllArea", newNode.value);
        this.length++;
    }
    insertAtTail(val) {
        this.insertAtHead(val);
        removeHeadFromScreen("cdllArea");
        this.tail = this.tail.next;
        appendDataOnScreen("cdllArea", val)
    }


    deleteHead() {
        this.tail.next = this.tail.next.next;
        this.tail.next.prev = this.tail;
        this.length--;
        removeHeadFromScreen("cdllArea")
    }

    deleteTail() {
        this.tail.prev.next = this.tail.next;
        this.tail.next.prev = this.tail.prev;
        this.tail = this.tail.prev;
        this.length--;
        removeTailFromScreen("cdllArea");
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
function prependDataOnScreen(dsArea, data) {
    let outputArea = document.querySelector(`.${dsArea} .outputArea`);
    let dataDiv = document.createElement("div");
    let dataVal = document.createElement("div");
    let nextVal = document.createElement("div");
    dataVal.innerText = data;
    dataDiv.classList.add("memBlock");
    dataVal.classList.add("data");
    nextVal.classList.add("next");
    dataDiv.appendChild(dataVal);
    dataDiv.appendChild(nextVal);
    outputArea.prepend(dataDiv);
}
function appendDataOnScreen(dsArea, data) {
    let outputArea = document.querySelector(`.${dsArea} .outputArea`);
    let dataDiv = document.createElement("div");
    let dataVal = document.createElement("div");
    let nextVal = document.createElement("div");
    dataVal.innerText = data;
    dataDiv.classList.add("memBlock");
    dataVal.classList.add("data");
    nextVal.classList.add("next");
    dataDiv.appendChild(dataVal);
    dataDiv.appendChild(nextVal);
    outputArea.append(dataDiv);
}
function removeHeadFromScreen(dsArea) {
    document.querySelector(`.${dsArea} .memBlock`).remove()
}
function removeTailFromScreen(dsArea) {
    document.querySelectorAll(`.${dsArea} .memBlock`)[document.querySelectorAll(`.${dsArea} .memBlock`).length - 1].remove()
}
function straightLLDisplay(areaName, dsName) {
    // Assign variable values
    let pushHeadInput = document.querySelector(`.${areaName} .push input`);
    let pushBtn = document.querySelector(`.${areaName} .push-btn`);
    let pop = document.querySelector(`.${areaName} .pop`);
    let searchInput = document.querySelector(`.${areaName} .search input`);
    let searchBtn = document.querySelector(`.${areaName} .search-btn`);
    // Original Stack
    if (dsName.length == 0) {
        dsName.customPush(1);
        dsName.customPush(2);
        dsName.customPush(3);
    }
    // event listeners
    pushBtn.addEventListener("click", () => {
        if (!isNaN(pushHeadInput.value) && pushHeadInput.value) {
            dsName.customPush(pushHeadInput.value)
            dsName.display();
            pushHeadInput.value = "";
        }
    })
    pop.addEventListener("click", () => {
        dsName.customPop();
        dsName.display();
    })
    searchBtn.addEventListener("click", () => {
        if (!isNaN(searchInput.value) && searchInput.value) {
            dsName.search(searchInput.value)
            searchInput.value = ""
        }
    })

}

function doubleLLDisplay(areaName, dsName) {
    // Assign variable values
    let pushHeadInput = document.querySelector(`.${areaName} .pushHead input`);
    let pushHeadBtn = document.querySelector(`.${areaName} .push-head-btn`);
    let pushTailInput = document.querySelector(`.${areaName} .pushTail input`);
    let pushTailBtn = document.querySelector(`.${areaName} .push-tail-btn`);
    let popHead = document.querySelector(`.${areaName} .popHead`);
    let popTail = document.querySelector(`.${areaName} .popTail`);
    let searchInput = document.querySelector(`.${areaName} .search input`);
    let searchBtn = document.querySelector(`.${areaName} .search-btn`);
    // Original Stack
    if (dsName.length == 0) {
        dsName.insertAtHead(1);
        dsName.insertAtHead(2);
        dsName.insertAtHead(3);
    }
    // event listeners
    pushHeadBtn.addEventListener("click", () => {
        if (!isNaN(pushHeadInput.value) && pushHeadInput.value) {
            dsName.insertAtHead(pushHeadInput.value)
            dsName.display();
            pushHeadInput.value = "";
        }
    })
    pushTailBtn.addEventListener("click", () => {
        if (!isNaN(pushTailInput.value) && pushTailInput.value) {
            dsName.insertAtTail(pushTailInput.value)
            dsName.display();
            pushTailInput.value = "";
        }
    })
    popHead.addEventListener("click", () => {
        dsName.deleteHead();
        dsName.display();
    })
    popTail.addEventListener("click", () => {
        dsName.deleteTail();
        dsName.display();
    })
    searchBtn.addEventListener("click", () => {
        if (!isNaN(searchInput.value) && searchInput.value) {
            dsName.searchLinkedlist(searchInput.value)
            searchInput.value = ""
        }
    })

}
let stack = new StackOperations;
let queue = new QueueOperations;
let scll = new SCLL;
let dcll = new DCLL;
straightLLDisplay("stackArea", stack);
straightLLDisplay("queueArea", queue);
doubleLLDisplay("csllArea", scll)
doubleLLDisplay("cdllArea", dcll)

// Dropdown Code
const dropdown = document.querySelector(".dropdown-clickarea");
const dsArea = document.querySelectorAll(".dsArea")
dropdown.addEventListener("click", () => {
    document.querySelector(".menu-items").style.display = "block"
})
document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("title")) {
        document.querySelectorAll(".menu-items").forEach(menu => {
            menu.style.display = "none"
        })

    }
    if (e.target.classList.contains("stack-item")) {
        document.querySelector(".dropdown-clickarea .title").innerText = e.target.innerText
        hideAll(dsArea)
        dsArea[0].style.display = "flex"
    }
    if (e.target.classList.contains("queue-item")) {
        document.querySelector(".dropdown-clickarea .title").innerText = e.target.innerText
        hideAll(dsArea)
        dsArea[1].style.display = "flex"
    }
    if (e.target.classList.contains("csll-item")) {
        document.querySelector(".dropdown-clickarea .title").innerText = e.target.innerText
        hideAll(dsArea)
        dsArea[2].style.display = "flex"
    }
    if (e.target.classList.contains("cdll-item")) {
        document.querySelector(".dropdown-clickarea .title").innerText = e.target.innerText
        hideAll(dsArea)
        dsArea[3].style.display = "flex"

    }
})
function hideAll(item) {
    item.forEach(dataArea => {
        dataArea.style.display = "none"
    })
}