
/**
 * 10 --> 15 --> 20
 *    <--    <--
 */

/**
 * This Instance (Class) represents of the linked list node reuseablelity.
 */
class Node{
    constructor(value){
        this.value = value;
        this.next  = null; 
        this.prev = null
    }
};


class LinkedList{
    constructor(value){
         const newNode = new Node(value);
         this.head = newNode; 
         this.tail = this.head;
         this.length = 1;
    };
     /**
     * @description append method to adds a node to the linked list beginning.
     * @param value 
     * @returns 
     * * Big O - O(1)
     */
    append(value){
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };

    /**
     * @description prepend method to adds a node to the linked list at the end.
     * @param  value 
     * @returns
     * * Big O - O(1) 
     */
    prepend(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    /**
     * @description this method is check the linked list values
     * @returns array 
     */
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode.next != null){ 
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };
        return array;
    }
    /**
     * @description this methods insert the new node into the linked list
     * @param {*} index 
     * @param {*} value 
     * @returns 
     * * Big O - O(n)
     */
    insert(index,value){
        if(index === 0){
            return this.append(value);
        };
        if(index >= this.length){
            return this.prepend(value);
        };
        /**
         * 0 --> 2
         *   <--
         * 
         * Below lines are littel confusing I break throw the steps below
         * 
         *  0   2
         *  \\ //
         *    1
         *  we adding the new node that node will be inserted into the middle of the node.It wil be 
         *  pointed to the next node.
         */
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        
        let follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        leader.next = newNode;
        newNode.next = follower;
        
        this.length++;
        this.printList();
    };
    /**
     * @description this method get the currentNode from the linked list
     * @param {*} index 
     * @returns 
     */
    treverse(index){
        let counter = 0;
        let currentNode = this.head;
        while(index != counter){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    };

    /**
     * @description this method is remove the node from the linked list
     * @param {*} index 
     * @returns 
     * * Big O - O(n)
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined; // Index out of bounds
        }
  
        let removedNode;
        if (index === 0) {
            // Remove the head node
            removedNode = this.head;
            this.head = removedNode.next;
            if (this.length === 1) {
                // If only one node, reset tail
                this.tail = null;
            } else {
                this.head.prev = null;
            }
        } else if (index === this.length - 1) {
            // Remove the tail node
            removedNode = this.tail;
            this.tail = removedNode.prev;
            this.tail.next = null;
        } else {
            let leader = this.traverseToIndex(index - 1);
            removedNode = leader.next;
            let follower = removedNode.next;
  
            leader.next = follower;
            follower.prev = leader;
        }
  
        this.length--;
        return removedNode;
    }
}

const linkedList = new LinkedList(100);
linkedList.addItemToFirst(2);
// linkedList.addItemToEnd(15);
// linkedList.addItemToFirst(1);
// linkedList.addItemToFirst(0);
// linkedList.addItemToEnd(20);
linkedList.insert(1, 70);
// linkedList.insert(111, 77);
// linkedList.insert(199, 40);
// linkedList.insert(200, 50);
// linkedList.remove(2);
linkedList.remove(2);
console.log(linkedList);
console.log(linkedList.printList());