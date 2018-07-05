function SLNode(value){
    this.val=value;
    this.next=null;
}

function SLQueue(){
    var head = null;
    var tail = null;

    // Adds the given value to end of the SL queue 
    this.enQueue = function(value){
        newnode = new SLNode(value)
        if (!head){
            head = newnode
            tail = newnode
        }
        else{
            tail.next = newnode;
            tail = newnode;
        }
        return this;
    }
    // Removes and returns value at the front of queue
    this.deQueue = function(){
        if (!head && !tail){
            return null;
        }
        if (head == tail){
            var val = head.val;
            head = null;
            tail = null;
            return val
        }
        var old = head.val;
        head = head.next;
        return old;
    }
    // Returns the number of values in our queue
    this.size = function(){
        var runner = head;
        var count = 0;
        while (runner){
            count++
            runner = runner.next;
        }
        return count;
    }
    // Displays all the nodes in the SL queue
    this.displayNodes = function(){
        var arr = [];
        var runner = head;
        while (runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        return arr;
    }
}

function SLStack(){
    var top = null;

    // Adds a value to stack and makes it the new top
    this.push1 = function(value){
        var node = new SLNode(value);
        node.next = top;
        top = node;
        return this;
    }
    // Removes and returns the top val
    this.pop1 = function(){
        if (!top){
            return this;
        }
        prev = top.val;
        top = top.next;
        return prev;
    }
    this.size = function(){
        var count = 0;
        var runner = top;
        while (runner){
            count++;
            runner = runner.next
        }
        return count;
    }
    this.display = function(){
        var arr = [];
        var runner = top;
        while (runner){
            arr.push(runner.val)
            runner = runner.next;
        }
        return arr;
    }
    // Copies the current stack into a new stack, using a Queue as temporary storage
    this.copystack = function(){
        var x = new SLStack()
        var y = new SLQueue()
        while (this.size()){
            x.push1(this.pop1())
        }
        while (x.size()){
            y.enQueue(x.pop1())
        }
        while (y.size()){
            var temp = y.deQueue()
            this.push1(temp)
            x.push1(temp)
        }
        return x.display()
    }
}

// Different implementation of the Queue class by using two stacks
function newQueue(){
    var s1 = new SLStack()
    var s2 = new SLStack()

    this.enQueue2 = function(val){
        s1.push1(val)
        return this;
    }
    this.deQueue2 = function(val){
        for (var i = 0; i < s1.size(); i++){
            s2.push1(s1.pop1())
        }
        var temp = s2.pop()
        for (var i = 0; i < s2.size(); i++){
            s1.push(s2.pop())
        }
        return temp;
    }
}

function ArrStack(){
    var arr = [];

    this.push2 = function(value){
        arr[arr.length] = value;
        return this;
    }
    this.pop2 = function(){
        var old = arr[arr.length-1];
        arr.length--;
        return old;
    }
    this.size = function(){
        return arr.length;
    }
    this.display = function(){
        return arr;
    }
}

// Checks if the queue is a palindrome, i.e. the order of values is the same forward and backward
function isPalindrome (queue){
    var stack = new SLStack()
    var x = 0;
    while (x < queue.size()){
        var y = queue.deQueue()
        stack.push1(y)
        queue.enQueue(y)
        x++
    }
    var z = 0
    while (z < queue.size()){
        var a = queue.deQueue()
        if (a != stack.pop1()){
            return false
        }
        queue.enQueue(a)
        z++
    }
    return true
}

stack1 = new SLStack();
stack1.push1(1).push1(2).push1(3)
console.log(stack1.display())
console.log(stack1.copystack())

queue1 = new SLQueue()
queue1.enQueue(3).enQueue(5).enQueue(8).enQueue(5).enQueue(3)
console.log(isPalindrome(queue1))
console.log(queue1.displayNodes())



// arrstack1 = new ArrStack();
// arrstack1.push2(10).push2(20)
// arrstack1.pop2()
// console.log(arrstack1.display())