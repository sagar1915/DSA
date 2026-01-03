var hasCycle = function (head) {
	let newSet = new Set();
	let curr = head;
	while (curr != null && curr.next != null) {
		let has = newSet.has(curr);
		if (has) {
			return true;
		}
		newSet.add(curr);
		curr = curr.next;
	}
	return false;
};
