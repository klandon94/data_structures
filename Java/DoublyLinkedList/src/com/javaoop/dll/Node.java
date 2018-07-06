package com.javaoop.dll;

public class Node {
	public Integer value;
	public Node previous;
	public Node next;
	
	public Node(Integer val) {
		value = val;
		previous = null;
		next = null;
	}
}
