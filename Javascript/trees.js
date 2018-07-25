function Leaf(v){
    this.value = v;
    this.right = null;
    this.left = null;
}

function Tree(){
    this.root = null;

    this.add = function(val){
        if (!this.root){
            this.root = new Leaf(val)
            return this;
        }
        let current = this.root
        while (current){
            if (val < current.value){
                if (!current.left){
                    current.left = new Leaf(val)
                    return;
                }
                else current = current.left
            }
            else if (val >= current.value){
                if (!current.right){
                    current.right = new Leaf(val)
                    return;
                }
                else current = current.right
            }
        }
    }

    this.isEmpty = function(){
        if (this.root) return true
        return false
    }

    this.contains = function(val){
        let current = this.root
        while (current){
            if (current.value == val) return true
            if (val < current.value) current = current.left
            else if (val > current.value) current = current.right
        }
        return false
    }

    this.min = function(){
        let current = this.root
        while (current.left) current = current.left
        return current.value
    }

    this.max = function(){
        let current = this.root
        while (current.right) current = current.right
        return current.value
    }

    // This method accepts a single argument, process, which is a function that should be run on each node in the tree.
    // Defines a helper function called inOrder() which is used to recursively traverse the tree. Only goes left and right if
    // the node exists. Starts in-order traversal from the root node and the process() function handles processing each node.
    this.traverse = function(process){
        // helper function
        function inOrder(leaf){
            if (leaf){
                // traverse left subtree
                if (leaf.left) inOrder(leaf.left)
                // call the process method on this node
                process.call(this, leaf);
                // traverse the right subtree
                if (leaf.right) inOrder(leaf.right)
            }
        }
        // start with root
        inOrder(this.root)
    }
    this.size = function(){
        let length = 0
        this.traverse(function(leaf){
            length++
        })
        return length
    }

}

let l1 = new Leaf(5)
let l2 = new Leaf(10)
let l3 = new Leaf(15)
let t1 = new Tree();

t1.add(15)
t1.add(10)
t1.add(20)
t1.add(28)
t1.add(14)
t1.add(8)
t1.add(4)
t1.add(80)
console.log(t1.size())

