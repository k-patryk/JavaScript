arr = [1, 2, 3, 4, 5, 6];
let product = 1;
let add = 0;

function sum_product(ww) {
	for (let i = 0; i < arr.length; i++) {
		add += arr[i];
	}
	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];
	}
	console.log("sum: " + add);
	console.log("product: " + product);
}

sum_product(arr);
