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

	const sum = Math.abs(min) + Math.abs(max);
	let offset = 0;

	for (let i = min; i <= max; i += sum / 3) {
		$(`${this.view.root} .slider__scale-numbers`).append(
			`<div class="slider__scale-number slider__scale-number_${direction}" style="${offsetDirection}:${offset}px">${i.toFixed(
				1
			)}</div>`
		);
		offset += 400 / 3;
	}
};

export default createScaleNumbers;
