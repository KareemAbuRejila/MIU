//Implentation for LinkedList By Class;
console.log('------------------------ LinkedList ----------------------')
class mNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class mLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new mNode(element);
        let current;

        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
        this.size++;
    }
    remove(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) this.head = current.next;
                else prev.next = current.element;
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    insertAt(element, location) {}
    reomveFrom(element, location) {}
    isEmpty() { return this.size == 0; }
    sizeOfList() { return this.size; }
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.data + ' ,';
            current = current.next;
        }
        console.log(str)
    }
}


let ll = new mLinkedList();

console.log(ll.isEmpty());
ll.add(10);
ll.printList(ll);
console.log(ll.sizeOfList());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList(ll);
console.log("is element removed ?" + ll.remove(50));
ll.printList();
console.log("is List Empty ? " + ll.isEmpty());
ll.printList();