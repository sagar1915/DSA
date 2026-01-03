var hasCycle = function (head) {

	if (head == null) return false;
	let slow = head;
	let fast = head.next;

	while (slow && slow.next != null) {
		if (fast == null || fast.next == null) return false;
		if (slow == fast) {
			return true;
		}
		slow = slow.next;
		fast = fast.next.next;
	}
	return false;
};
