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

	const linesCount = Math.ceil(length / multiplier);

	const range = Math.abs(max - min);

	const isCountBigThanScalePoint = Math.floor(range / step) > linesCount;

	const actualScaleSize = isCountBigThanScalePoint
		? Math.round(Math.round(range / step) / (linesCount - 1)) * step
		: step;

	const values = new Array(linesCount)
		.fill(null)
		.map((_, index) => {
			let value = min + actualScaleSize * index;
			value = Math.min(value, max);
			if (index === linesCount - 1) value = max;
			return value;
		})
		.filter((item, pos, arr) => !pos || item !== arr[pos - 1]);

	const offsets = new Array(linesCount)
		.fill('')
		.map((_, index) => {
			let offset = Math.abs(actualScaleSize / range) * index * 100;

			if (offset > 100) offset = 100;
			if (index === linesCount - 1) offset = 100;
			return offset;
		})
		.filter((item, pos, arr) => !pos || item !== arr[pos - 1]);

	const scaleData = {
		values,
		offsets,
	};

	return scaleData;
}

export default prepareScaleData;
