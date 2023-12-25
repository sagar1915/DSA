const ProntDivisors = (d) => {
	const dup = d;
	const arr1 = [];
	for (let i = 1; i * i <= d; i++) {
		if (d % i == 0) {
			arr1.push(i);
			if (d / i != i) {
				arr1.push(d / i);
			}
		}
	}
	arr1.sort();
	console.log(arr1);
};
const res = ProntDivisors(36);
console.log(res);
