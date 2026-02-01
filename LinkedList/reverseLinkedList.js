var reverseList = function (head) {
	let curr = head;
	let prev = null;
	let temp = null;

	while (curr) {
		temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}
	head = prev;
	return head;
};
