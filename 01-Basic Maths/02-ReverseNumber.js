const reverseNumber = (d) => {
	let rn = 0;
	let ln = 0;
	while (d > 0) {
		ln = d % 10;
		rn = rn * 10 + ln;
		d = Math.floor(d / 10);
	}
	return rn;
};

const res = reverseNumber(987654321);
console.log(res);
