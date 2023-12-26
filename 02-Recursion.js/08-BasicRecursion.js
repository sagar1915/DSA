// 01.Print name N times
const rec = (n, name) => {
	console.log(n, name);
	if (n > 1) {
		rec(n - 1, name);
	}
	console.log(n, name);
};

rec(10, "hello");

//02.print linearly from 1 to N
const rec2 = (n) => {
	if (n > 1) {
		rec2(n - 1);
	}
	console.log(n);
};
rec2(20);

//03.print numbers in reverse
const rec3 = (n) => {
	console.log(n);
	if (n > 1) {
		rec3(n - 1);
	}
};
rec3(10);
