const GCD = (a, b) => {
	let x;
	let gc = 0;
	a > b ? (x = b) : (x = a);
	for (let i = 0; i <= x; i++) {
		if (a % i == 0 && b % i == 0) {
			gc = i;
		}
	}
	return gc;
};

const res = GCD(11, 13);
console.log(res);
