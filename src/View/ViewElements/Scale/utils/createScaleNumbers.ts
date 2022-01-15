import { Direction } from "../../../../Interfaces/interfaces";
import Scale from "../Scale";

const createScaleNumbers = function (
	this: Scale,
	step: number,
	max: number,
	min: number,
	direction: Direction
) {
	const offsetDirection = direction === "horizontal" ? "left" : "top";
	$(`${this.view.root} .slider__scale`).append(
		`<div class="slider__scale-numbers slider__scale-numbers_${direction}"></div>`
	);

	let offset = 0;

	const length = Math.round((max - min) / step + 1);
	const lastIndex = length - 1;

	const primes = [3, 5, 7, 11];

	const delimiter = getDelimiter(lastIndex, primes);

	let multiplier = Math.max(Math.floor(lastIndex / delimiter), 1);
	multiplier = multiplier < 15 ? Math.min(multiplier, delimiter) : multiplier;
	console.log(multiplier);

	const values = new Array(Math.ceil(length / multiplier))
		.fill(null)
		.map((_, index) => Number((step * index * multiplier + min).toFixed(1)))
		.map((value) => value);

	for (let i = 0; i < values.length; i += 1) {
		$(`${this.view.root} .slider__scale-numbers`).append(
			`<div class="slider__scale-number slider__scale-number_${direction}" style="${offsetDirection}:${offset}px">${values[i]}</div>`
		);
		offset += 400 / (values.length - 1);
	}
};

function getDelimiter(dividend: number, delimiters: number[]): number {
	for (const delimiter of delimiters) {
		if (dividend % delimiter === 0) {
			return delimiter;
		}
	}
	return getDelimiter(dividend - 1, delimiters);
}

export default createScaleNumbers;
