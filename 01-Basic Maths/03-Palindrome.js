const Palindrome = (d) => {
	let dup = d;
	let ln = 0;
	let rn = 0;
	while (d > 0) {
		ln = d % 10;
		rn = rn * 10 + ln;
		d = Math.floor(d / 10);
	}
	if (dup === rn) {
		return true;
	} else {
		return false;
	}
};
const res = Palindrome(113411);
console.log(res);
