/* function reverseString(s) {
	let p1 = 0;
	let p2 = s.length - 1;
	while (p1 < p2) {
		let temp = s[p1];
		s[p1] = s[p2];
		s[p2] = temp;
		p1 += 1;
		p2 -= 1;
	}
}
let string = "hello";

let reversedString = reverseString(string);

console.log(`Original string: ${string}`);

console.log(`Reversed string: ${reversedString}`);
 */
/* var reverseString = function (s) {
	let arr = s.split("");
	arr.reverse();
	return arr.join("");
};

let string = "hello";
console.log(reverseString(string)); */

function reverseString(s) {
	let reversedString = "";

	for (let i = s.length - 1; i >= 0; i--) {
		reversedString += s[i];
	}
	return reversedString;
}

let string = "abcd";

let reversedString = reverseString(string);

console.log(`Original string: ${string}`);

console.log(`Reversed string: ${reversedString}`);
