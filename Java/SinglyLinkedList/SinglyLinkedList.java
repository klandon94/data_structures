import java.util.ArrayList;

public class SinglyLinkedList{
    public Node head;

    public SinglyLinkedList(){
        head = null;
    }
    
    public void add(int value){
        Node newNode = new Node(value);
        if (head == null){
            head = newNode;
        }
        else{
            Node runner = head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    public void remove(){
        Node runner = head;
        if (head == null){
            System.out.println("No nodes in this list!");
        }
        else if (head.next == null){
            head = null;
        }
        else{
            while (runner.next.next != null){
                runner = runner.next;
            }
            runner.next = null;
        }
    }

    public int find(int val){
        Node runner = head;
        int count = 0;
        while (runner != null){
            if (runner.value == val){
                return count;
            }
            count++;
            runner = runner.next;
        }
        return -1;
    }

    public void removeAt(int index){
        Node runner = head;
        int count = 0;
        if (index == 0) head = head.next;
        else{
            while (runner.next != null && count < index-1){
                runner = runner.next;
                count++;
            }
            if (runner.next == null) System.out.println("There can only be so many nodes");
            else runner.next = runner.next.next;
        }
    }

    public void printValues(){
        Node runner = head;
        ArrayList<Integer> list = new ArrayList<Integer>();
        while (runner != null){
            list.add(runner.value);
            runner = runner.next;
        }
        System.out.println(list);
    }
}