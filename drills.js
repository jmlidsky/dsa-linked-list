// Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

// O(n^2) - we traverse the list twice at the same time

function WhatDoesThisProgramDo(lst) { // accepts list as an argument
    let current = lst.head; // assigns the variable, current, to the list's head (first item)
    while (current !== null) { // while we do not reach the end of the list
        let newNode = current; // assign variable newNode to current
        while (newNode.next !== null) { // while newNode is not the last node
            if (newNode.next.value === current.value) { // compare the node wae are on with a new node
                newNode.next = newNode.next.next; // remove the first duplicate value by setting the pointer to the second
            }
            else {
                newNode = newNode.next; // keep looking
            }
        }
        current = current.next;
    }
}

// Reverse a list
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.



// 3rd from the end
// Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.



// Middle of a list
// Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.



// Cycle in a list
// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.



// Sorting a list
// Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.