const Prime = (d) => {
	let count = 0;
	for (let i = 1; i * i <= d; i++) {
		if (d % i == 0) {
			count++;
			if (d / i != i) {
				count++;
			}
		}
	}
	if (count == 2) {
		console.log("Prime");
	} else {
		console.log("Not Prime");
	}
};
const res = Prime(5);
console.log(res);
