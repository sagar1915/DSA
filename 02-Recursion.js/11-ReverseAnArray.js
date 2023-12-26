// const ReverseAnArray = (arr) => {
// 	const s = 0;
// 	const e = arr.length() - 1;
// 	if (s >= e) {
// 		temp = 0;
// 		ReverseAnArray();
// 	}
// };

// const res = ReverseAnArray([1, 2, 3, 4, 5]);
// console.log(res);

const ReverseAnArray2 = (i, arr, n) => {
	if (i >= n / 2) {
		console.log(arr);
		return;
	}
	[arr[i], arr[n]] = [arr[n], arr[i]];
	ReverseAnArray2(i + 1, arr, n - 1);
};

const inputarr = [1, 2, 3, 4, 5, 6];
const n = inputarr.length;
const res = ReverseAnArray2(0, inputarr, n - 1);
