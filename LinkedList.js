class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, key) {
        let currNode = this.head;
        let previousNode = this.head;

        if (!this.head) {
            return null;
        }

        while ((currNode !== null) && (currNode.value !== key)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode.next === null) {
            console.log('Item not found')
            return;
        }

        let newNode = previousNode
        newNode.next = new _Node(item, previousNode.next)
    }

    insertAfter(item, key) {
        let currNode = this.head;
        let previousNode = this.head;

        if (!this.head) {
            return null;
        }

        while ((currNode !== null) && (previousNode.value !== key)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        //if your'e at the end of the list and you haven't found the key
        if (currNode === null && (previousNode.value !== key)) {
            console.log('Item not found')
            return;
        }

        let newNode = new _Node(item, previousNode.next)
        previousNode.next = newNode;
    }

    //Is "zero-indexed" (consideres head to be position 0)
    insertAt(item, position) {
        if (position === 0) {
            this.head = new _Node(item, this.head)
            return;
        }

        let counter = 1;
        let prevNode = this.head;
        let currNode = this.head;
        while (counter <= position && currNode !== null) {
            counter++;
            prevNode = currNode;
            currNode = currNode.next;
        }

        let newNode = new _Node(item, currNode);
        prevNode.next = newNode;
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function display(list) {
    console.log(JSON.stringify(list))
}

function size(list) {
    let counter = 0;
    let currNode = list.head;
    while (currNode !== null) {
        counter++;
        currNode = currNode.next
    }
    console.log(counter);
}

function isEmpty(list) {
    if (list.head === null) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function findPrevious(list, item) {
    let currentNode = list.head;
    let previousNode = list.head;

    if (list.head === item) {
        return null;
    }

    while (currentNode.value !== item && currentNode.next !== null) {
        currentNode = currentNode.next;
        if (currentNode.value === item) {
            console.log(previousNode.value);
        }
        previousNode = currentNode;
    }
}

function findLast(list) {
    if (list.head === null) {
        return null
    }
    let currNode = list.head;

    //if currNode.next === null then return currNode
    while (currNode.next !== null) {
        currNode = currNode.next
    }

    console.log(currNode.value);
}

function main() {
    let SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    SLL.insertLast('Tauhida')

    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')

    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat', 3)

    SLL.remove('Tauhida')

    display(SLL);
    size(SLL);
    isEmpty(SLL);
    findPrevious(SLL, 'Starbuck');
    findLast(SLL)
}

main()