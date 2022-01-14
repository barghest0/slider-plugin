import { Direction } from "../../../../Interfaces/interfaces";
import Scale from '../Scale';

const createScaleMarks = function (
	this: Scale,
	step: number,
	max: number,
	min: number,
	direction: Direction
) {
	const offsetDirection = direction === "horizontal" ? "left" : "top";
	$(`${this.view.root} .slider__scale`).append(
		`<div class="slider__scale-marks slider__scale-marks_${direction}"></div>`
	);

	const sum = Math.abs(min) + Math.abs(max);
	let offset = 0;
	for (let i = min; i <= max; i += sum / 6) {
		$(`${this.view.root} .slider__scale-marks`).append(
			`<div class="slider__scale-mark slider__scale-mark_${direction}" style="${offsetDirection}:${offset}px"></div>`
		);
		offset += 400 / 6;
	}
};

export default createScaleMarks;
