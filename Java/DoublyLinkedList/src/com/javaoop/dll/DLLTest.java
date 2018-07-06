package com.javaoop.dll;

public class DLLTest {

	public static void main(String[] args) {
		DLL dll = new DLL();
		Node n1 = new Node(10);
		Node n2 = new Node(20);
		Node n3 = new Node(40);
		Node n4 = new Node(80);
		Node n5 = new Node(160);
		Node n6 = new Node(400);
		
		dll.push(n1);
		dll.push(n2);
		dll.push(n3);
		dll.push(n4);
		dll.push(n5);
//		Node x = dll.pop();
//		System.out.println("Just popped: " + x.value);
		
//		System.out.println("Length of DLL: " + dll.size());
//		System.out.println(dll.contains(40));
		
		dll.insertAt(n6, 5);
		dll.removeAt(5);
//		System.out.println(dll.isPalindrome());
		
		dll.printValuesForward();
	}

}
