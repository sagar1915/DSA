var middleNode = function (head) {
	let once = head;
	let twice = head;

	while (twice != null && twice.next != null) {
		twice = twice.next.next;
		once = once.next;
	}
	return once;
};
