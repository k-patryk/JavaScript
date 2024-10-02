let arr = [0, 1, 2, 3, 4, 5];

function square(w) {
	let temp = 0;
	let out = 0;
	for (let i = 0; i < arr.length; i++) {
		temp = w[i] * w[i];
		out += temp;
	}
	return out;
}

console.log(square(arr));
