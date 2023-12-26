const Palindrome = (str, i, n) => {
	if (i >= n / 2) return true;

	if (str[i] != str[n - i - 1]) {
		return false;
	}
	return Palindrome(str, i + 1, n);
};

const str = "maadaam";
const n = str.length;
const res = Palindrome(str, 0, n);
console.log(res);

