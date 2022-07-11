function extractPrimes(num) {
	if (num === 1) {
		return [];
	}
	let numArr = String(num).split('').filter(isPrime).sort();
	return numArr;
}

function isPrime(num) {
	if (!(num % 2 == 0)) {
		return num;
	}
}

console.log(extractPrimes(73));
