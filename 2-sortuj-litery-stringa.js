let string = "Akademia108";

function sortStr(s) {
	let arr = s.split("");
	arr.sort();
	return arr.join("");
}

console.log(sortStr(string));
