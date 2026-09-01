/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        let previousNode = null;
        let currentNode = head;
        
        while (currentNode) {
            let temp = currentNode.next; //BEFORE flipping the direction, save the remaining the nodes that need to be reversed in memory
            currentNode.next = previousNode; //apply the directional change 
            
            //reversal for this node has been done. now update the pointers:
            
            previousNode = currentNode; //update the saved current node  
            currentNode = temp; //move on to the remaining nodes

        }
        return previousNode; //return the collection of the updated nodes
    }
}
