// function countDigits(d) {
// 	let xy = 0;
// 	while (d > 0) {
// 		let last_digit = d % 10;
// 		xy = xy + 1;
// 		Math.trunc(d);

// 		d = Math.floor(d / 10);
// 	}
// 	return xy;
// }

// const r = countDigits(678934);
// console.log(r);

function countDigits(d) {
	const x = Math.log10(d) + 1;
	const xy = Math.floor(x);
	return xy;
}

const r = countDigits(678);
console.log(r);
