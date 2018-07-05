function Node (value){
    this.val = value;
    this.next = null;
    this.child = null;
}

function SList(){
    this.head = null;

    // Adds node to the end of the list
    this.addNode = function(value){
        var node = new Node(value);
        var runner = this.head;
        if (this.head == null){
            this.head = node;
        }
        else{
            while (runner.next != null){
                runner = runner.next;
            }
            runner.next = node;
        }
        return this;
    }

    // Adds a new node at the start of the SLL
    this.addFront = function(value){
        var newnode = new Node(value);
        if (this.head == null){
            this.head = newnode;
        }
        else{
            newnode.next = this.head;
            this.head = newnode;
        }
        return this;
    }

    // Removes the node at the start of the SLL
    this.removeFront = function(){
        if (this.head == null){
            return null;
        }
        else{
            this.head = this.head.next;
        }
        return this;
    }

    // Removes node with given value from the SLL
    this.removeVal = function(value){
        var runner = this.head;
        var prev_runner = this.head;
        if (this.head == null){
            return null;
        }
        if (runner.val == value){
            this.head = runner.next;
            runner = null;
            return this;
        }
        while (runner!=null && runner.val!= value){
            prev_runner = runner;
            runner = runner.next;
        }
        if (runner.val == value){
            prev_runner.next = runner.next;
            runner = null;
        }
        return this;
    }

    // Better? way to remove node with given walue from the SLL
    // this.removeVal2 = function(value){
    //     if (this.head == null){
    //         return null;
    //     }
    //     if (this.head.val == value){
    //         this.head = this.head.next;
    //         return this;
    //     }
    //     var runner = this.head;
    //     while (runner != null && runner.next.val != value){
    //         runner = runner.next;
    //     }
    //     if (runner.next.val == value){
    //         runner.next = runner.next.next
    //     }
    //     return null
    // }

    // Returns the maximum value within the SLL
    this.findMax = function(){
        if (this.head == null){
            return null;
        }
        var max = this.head.val;
        var runner = this.head;
        while (runner!=null){
            if (runner.val>max){
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }

    // Moves minimum value within the SLL to front of list
    this.moveMinFront = function(){
        if (this.head == null){
            return null;
        }
        var runner = this.head;
        var min_loc = this.head;
        var prevmin_loc = this.head;
        var min = this.head.val;

        while (runner.next){
            if (runner.next.val < min){
                min = runner.next.val;
                prevmin_loc = runner;
                min_loc = runner.next;
            }
            runner = runner.next
        }
        if (min == this.head.val){
            return this;
        }
        prevmin_loc.next = min_loc.next
        min_loc.next = this.head;
        this.head = min_loc;
    }

    // Prepends node of value val before node with value before in the list. Adds value to beginning if SLL is empty and to the end if before value is not present in the SLL
    this.prepend = function(val,before){
        newnode = new Node(val);
        runner = this.head;
        if (!this.head || this.head.val == before){
            newnode.next = this.head;
            this.head = newnode;
            return this;
        }
        while (runner.next && runner.next.val != before){
            runner = runner.next
        }
        if (runner.next==null){
            runner.next = newnode;
            return this;
        }
        newnode.next = runner.next;
        runner.next = newnode;
    }

    // Removes all nodes with negative values from the SLL
    this.removeNegs = function(){
        if (!this.head){
            return this;
        }
        var runner = this.head;
        while (runner.next && this.head){
            if (this.head.val<0){
                this.head = this.head.next;
            }
            else if (runner.next.val < 0){
                runner.next = runner.next.next;
            }
            else{
                runner = runner.next;
            }
        }
        return this;
    }

    // Sets a partition value and moves all nodes with lesser value to the left of partition and all nodes with greater value to the right of partition
    this.partition = function(value){
        var prev = this.head;
        var runner = this.head;
        while(runner && this.head.val != value){
            if (runner.val == value){
                prev.next = runner.next;
                runner.next = this.head;
                this.head = runner;
                break;
            }
            prev = runner
            runner = runner.next
        }
        var partition = this.head;
        var prev2 = this.head;
        var runner2 = this.head;
        while (runner2){
            if (runner2.val < partition.val){
                prev2.next= runner2.next;
                runner2.next = this.head;
                this.head = runner2;
                runner2 = prev2.next;
            }
            else{
                prev2 = runner2;
                runner2 = runner2.next;
            }
        }
        return this;
    }

    // Tuesday, July 3rd: Returns the kth last node value based on the given value of k
    this.kthlast = function(k){
        var runner = this.head;
        var indexer = this.head;
        if (k > this.len()){
            return null;
        }
        for (var i=0; i<(k-1); i++){
            indexer = indexer.next;
        }
        while (indexer.next){
            runner = runner.next;
            indexer = indexer.next;
        }
        return runner.val;
    }

    // Tuesday, July 3rd: Moves the children of any node (if they exist) into the original singly linked list
    this.flattenChild = function(){
        runner = this.head;
        childrunner = this.head;
        while (runner){
            if (runner.child){
                childrunner = runner.child;
                while (childrunner){
                    childrunner = childrunner.next;
                }
                childrunner.next = runner.next;
                runner.next = runner.child;
            }
            runner = runner.next;
        }
        return this;
    }

    // Returns true if the value given is present in the SLL, else false
    this.contains = function(value){
        var runner = this.head;
        while (runner!=null && runner.val!=value){
            runner = runner.next;
        }
        if (runner==null){
            return false;
        }
        return true;
    }

    // Returns the amount of nodes in the SLL
    this.len = function(){
        var runner = this.head;
        var counter = 0;

        while (runner!=null){
            runner = runner.next
            counter++;
        }
        return counter;
    }

    // Displays all of the nodes in the SLL in array format
    this.displayNodes = function(){
        var arr = [];
        var runner = this.head;
        while (runner != null){
            arr.push(runner.val);
            runner = runner.next;
        }
        return arr;
    }
}

// list1 = new SList();
// list1.addNode(40).addNode(80).addNode(300).addNode(10)
// console.log(list1.displayNodes())
// list1.prepend(12,8)
// console.log(list1.displayNodes())

// list2 = new SList();
// list2.addNode(-3).addNode(10).addNode(-200).addNode(-55)
// console.log(list2.displayNodes())
// list2.removeNegs();
// console.log(list2.displayNodes())

// list3 = new SList();
// list3.addNode(10).addNode(9).addNode(6).addNode(8).addNode(3).addNode(1)
// console.log(list3.displayNodes())
// list3.partition(5)
// console.log(list3.displayNodes())

list4 = new SList();
list4.addNode(5).addNode(10).addNode(30).addNode(20).addNode(4)
console.log(list4.displayNodes())
console.log(list4.kthlast(6))