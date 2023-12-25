function countDigits(d) {
	const x = Math.log10(d) + 1;
	const xy = Math.floor(x);
	return xy;
}

const ArmStrongNumber = (d, r) => {
	let dup = d;
	let sum = 0;
	let ln = 0;

	while (d > 0) {
		ln = d % 10;
		sum = sum + ln ** r;
		d = Math.floor(d / 10);
	}
	// console.log(r);
	// console.log(sum);
	// console.log(dup);
	if (sum === dup) {
		return true;
	} else {
		return false;
	}
};

const n = 153;
const res = ArmStrongNumber(n, countDigits(n));
console.log(res);
