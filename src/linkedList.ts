class NodeLink {
	public data: any;
	public next?: any;
	constructor(data: any, next: any = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	public head: any;
	public size: any;
	public tail: any;
	constructor() {
		this.head = null;
		this.size = 0;
		this.tail = this.tail

	}
	//This function should add a node to the end of the SinglyLinkedList
	push(data: any) {
		let node = new NodeLink(data)
		let current
		if (this.head !== null) {
			current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = node
		} else {
			this.head = node
		}

		this.size++

	}

	//This function should add a node to the end of the SinglyLinkedList
	pop() {
		let current = this.head
		let endTail = false
		console.log(this.size)
		while (this.head) {
			current = current.next		
		}
		
	}


	printList() {
		let current = this.head
		while (current.next) {
			console.log(current.data)
			current = current.next
		}
		console.log(current.data)
	}

}

const ll = new LinkedList();
ll.push(100)
ll.push(200)
ll.push(300)
// ll.printList()
ll.pop()
