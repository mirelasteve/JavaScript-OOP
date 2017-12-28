 class ListNode=(val)=> {
     this.val = val;
     this.next = null;
  }
const deleteDuplicates = (head)=> {
     if(head === null || head.next ===null) {
         return head;
     }
    let prime=head;
       while(prime.next!=null){
                if(prime.val==prime.next.val){
            prime.next=prime.next.next;            
                    } else {
        prime=prime.next;
                    }
    }
    return head;
};
