function p_sumOfFirstN(n, sum) {
	if (n < 1) {
		console.log(sum);
		return;
	} else {
		p_sumOfFirstN(n - 1, sum + n);
	}
}
// p_sumOfFirstN(100, (sum = 0));

function f_sumofFirstN(n) {
	let sum = 0;
	if (n > 0) {
		sum = n + f_sumofFirstN(n - 1);
	}
	return sum;
}

const res = f_sumofFirstN(3);
console.log(res);
