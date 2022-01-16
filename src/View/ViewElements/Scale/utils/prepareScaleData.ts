export const prepareScaleData = function (
	min: number,
	max: number,
	step: number
) {
	const length = Math.round((max - min) / step + 1);
	const lastIndex = length - 1;

	const primes = [3, 5, 7, 11];

	const delimiter = getDelimiter(lastIndex, primes);

	let multiplier = Math.max(Math.floor(lastIndex / delimiter), 1);
	multiplier = multiplier < 15 ? Math.min(multiplier, delimiter) : multiplier;
	const values = [];
	for (let i = 0; i < Math.ceil(length / multiplier); i++) {
		values.push(+(step * i * multiplier + min).toFixed(1));
	}
	return values;
};

function getDelimiter(dividend: number, delimiters: number[]): number {
	for (const delimiter of delimiters) {
		if (dividend % delimiter === 0) {
			return delimiter;
		}
	}
	return getDelimiter(dividend - 1, delimiters);
}
