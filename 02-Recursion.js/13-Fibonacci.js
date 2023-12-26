const Fibonacci = (n) => {
	if (n <= 1) return n;
	let f = Fibonacci(n - 1) + Fibonacci(n - 2);
	return f;
};

const res = Fibonacci(4);
console.log(res);
