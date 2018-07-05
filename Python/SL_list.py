class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class SingleLinkedList:
    def __init__(self,value):
        node = Node(value)
        self.head = node

    def addNode(self,value):
        node = Node(value)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = node
        return self

    def insertNode(self,value,index):
        node = Node(value)
        runner = self.head
        counter = 0
        if (index == 0):
            node.next = self.head
            self.head = node
            return
        while (runner and counter < index):
            prev_runner = runner
            runner = runner.next
            counter += 1
        node.next = runner
        prev_runner.next = node

    def removeNode(self,value):
        # storing head node
        runner = self.head
        # if node to be removed is at the beginning of the linked list
        if (runner.value == value):
            self.head = runner.next
            runner = None
            return
        # if node to be removed is in the rest of the linked list
        while (runner):
            if runner.value == value:
                break
            prev_runner = runner
            runner = runner.next
        # if node to be removed was not present in linked list
        if (runner == None):
            print("The value to be removed was not in the linked list\n")
            return
        # Unlink the node from linked list
        prev_runner.next = runner.next
        runner = None

    def printNodes(self):
        runner = self.head
        print("starting point(head):", id(self.head))
        while (runner.next != None):
            print ('current mem position:',id(runner),", value:",runner.value, ' next mem position:',id(runner.next))
            runner = runner.next
        print ('current mem position:',id(runner),", value:",runner.value, ' next mem position:',id(runner.next))

newlist = SingleLinkedList(5)
newlist.addNode(7).addNode(9).addNode(1)

print("="*21,"Here are the nodes in newlist","="*21)
newlist.printNodes()


# class SList():
#     def __init__(self):
#         self.head = None
        
#     def addNode(self,value):
#         node = Node(value)
#         runner = self.head
#         if self.head is None:
#             self.head = node
#             return self
#         while runner.next:
#             runner = runner.next
#         runner.next = node
#         return self

#     def printList(self):
#         temp = self.head
#         while(temp != None):
#             print(temp.value, end=' ')
#             temp = temp.next

# llist = SList()
# llist.addNode(1).addNode(4).addNode(5).addNode(6)
# llist.printList()