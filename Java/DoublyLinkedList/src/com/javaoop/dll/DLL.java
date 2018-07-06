package com.javaoop.dll;

public class DLL {
	public Node head;
	public Node tail;
	
	public DLL() {
		head = null;
		tail= null;
	}
	
	public void push(Node newNode) {
		if (head == null) {
			head = newNode;
			tail = newNode;
			return;
		}
		Node lastNode = tail;
		lastNode.next = newNode;
		newNode.previous = lastNode;
		tail = newNode;
	}
	
	public Node pop() {
		if (tail == null) {
			return null;
		}
		Node lastNode = tail;
		lastNode.previous.next = null;
		tail = lastNode.previous;
		return lastNode;
	}
	
	public void insertAt(Node newNode, int index) {
		if (index > this.size()) {
			System.out.println("index is out of range");
		} 
		else if (index == 0) {
			newNode.next = head;
			head.previous = newNode;
			head = newNode;
		}
		else {
			Node runner = head;
			int x = 0;
			while (runner != null && x < index) {
				runner = runner.next;
				x++;
			}
			if (runner == null) {
				Node lastNode = tail;
				lastNode.next = newNode;
				newNode.previous = lastNode;
				tail = newNode;
			}
			else {
				runner.previous.next = newNode;
				newNode.next = runner;
			}
		}
	}
	
	public void removeAt(int index) {
		if (index >= this.size()) {
			System.out.println("index is out of range");
		}
		else if (index == 0) {
			head.next.previous = null;
			head = head.next;
		}
		else {
			Node runner = head;
			int x = 0;
			while (runner != null && x < index) {
				runner = runner.next;
				x++;
			}
			if (runner.next == null) {
				runner.previous.next = null;
				tail = runner.previous;
			}
			else {
				runner.previous.next = runner.next;
				runner.next.previous = runner.previous;
			}
		}
	}
	
	public boolean isPalindrome() {
		Node Frunner = head;
		Node Brunner = tail;
		while (Frunner != null && Brunner != null) {
			if (Frunner.value != Brunner.value) {
				return false;
			}
			Frunner = Frunner.next;
			Brunner = Brunner.previous;
		}
		return true;
	}
	
	public boolean contains(Integer val) {
		Node runner = head;
		while (runner != null) {
			if (runner.value == val) {
				return true;
			}
			runner = runner.next;
		}
		return false;
	}
	
	public int size() {
		Node runner = head;
		int count = 0;
		while (runner != null) {
			runner = runner.next;
			count++;
		}
		return count;
	}
	
	public void printValuesForward() {
		Node runner = head;
		while(runner != null) {
			System.out.println(runner.value);
			runner = runner.next;
		}
	}
	
	public void printValuesBackward() {
		Node runner = tail;
		while(runner != null) {
			System.out.println(runner.value);
			runner = runner.previous;
		}
	}
	
	
	
	
}
