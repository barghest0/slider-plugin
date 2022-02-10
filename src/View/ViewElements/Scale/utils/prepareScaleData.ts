function getDelimiter(dividend: number, delimiters: number[]): number {
	for (let i = 0; i < delimiters.length; i += 1) {
		if (dividend % delimiters[i] === 0) {
			return delimiters[i];
		}
	}
	return getDelimiter(dividend - 1, delimiters);
}

function prepareScaleData(min: number, max: number, step: number) {
	const length = Math.round((max - min) / step + 1);
	const lastIndex = length - 1;

	const primes = [3, 5, 7, 11];

	const delimiter = getDelimiter(lastIndex, primes);
	let multiplier = Math.max(Math.floor(lastIndex / delimiter), 1);

	multiplier = multiplier < 15 ? Math.min(multiplier, delimiter) : multiplier;

	const values = [];

	for (let i = 0; i < Math.ceil(length / multiplier); i += 1) {
		values.push(+(step * i * multiplier + min).toFixed(3));
	}

	return values;
}

export default prepareScaleData;
