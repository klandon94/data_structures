class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class DoublyLinkedList:
    # Constructor for empty doubly linked list
    def __init__(self):
        self.head = None

    # Given a reference to the head of a list and a value, inserts a new node of given value at the front of list
    def push(self, value):
        node = Node(value)
        node.next = self.head
        if self.head is not None:
            self.head.prev = node
        self.head = node
        return self

    # Given a reference to the head of the DLL and a value, appends a new node of given value at the end of list
    def append(self, value):
        node = Node(value)
        # New node is going to be the last node, so make it point to None
        node.next = None
        # If the linked list is empty, then make the new node as head
        if self.head == None:
            node.prev = None
            self.head = node
            return self
        # Else traverse until the very last node
        last = self.head
        while(last.next != None):
            last = last.next
        # Change the next of the last node and make last node the previous of the new node (which is now in last position)
        last.next = node
        node.prev = last
        return self

    # Given a node as prev_node, insert a new node after the given node
    def insertAfter(self, prev_node, value):
        if prev_node is None:
            print('the given previous node cannot be NULL')
            return
        node = Node(value)
        # Make next of new node as next of previous node
        node.next = prev_node.next
        # Make prev_node as previous of new node (part 1)
        prev_node.next = node
        # Make prev_node as previous of new node (part 2)
        node.prev = prev_node
        # Changes the previous of new node's next node
        if node.next is not None:
            node.next.prev = node

    def removeNode(self,value):
        runner = self.head

        if (runner.value == value):
            self.head = runner.next
            runner.next.prev = None
            runner = None
            return

        while runner:
            if runner.value == value:
                break
            runner = runner.next

        if runner == None:
            print("The value to be removed was not in the linked list")
            return

        runner.prev.next = runner.next
        if runner.next is None:
            runner = None
        else:
            runner.next.prev = runner.prev
            runner = None

    def showNodes(self):
        runner = self.head
        print("Traversal in forward direction")
        while (runner): #same as while(runner!=None)
            print(runner.value, end=' ')
            # last = runner
            runner = runner.next
        # print("\nTraversal in reverse direction")
        # while (last):
        #     print(last.value,end=" ")
        #     last = last.prev

newlist = DoublyLinkedList()
newlist.append(5).append(10).append(15).append(20).push(100)
newlist.removeNode(10)
newlist.showNodes()