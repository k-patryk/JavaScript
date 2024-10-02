function fib(n) {
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	let f = 0;
	let fp = 1;

	for (let i = 2; i <= n; i++) {
		let sum = f + fp;
		f = fp;
		fp = sum;
	}
	return fp;
}

console.log(fib(7));
