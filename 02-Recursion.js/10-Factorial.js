const Factorial = (n) => {
	if (n == 0) return 1;
	return n * Factorial(n - 1);
};
const res = Factorial(6);
console.log(res);
