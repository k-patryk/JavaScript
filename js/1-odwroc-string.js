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
