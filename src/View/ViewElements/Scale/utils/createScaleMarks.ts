import { Direction } from "../../../../Interfaces/interfaces";
import Scale from "../Scale";
import { prepareScaleData } from "./prepareScaleData";

const createScaleMarks = function (
	this: Scale,
	step: number,
	max: number,
	min: number,
	direction: Direction
) {
	const values = prepareScaleData(min, max, step);
	let offset = 0;
	if (direction === "vertical") {
		values.reverse();
	}
	for (let i = 0; i < values.length; i++) {
		$(`${this.view.root} .slider__scale`).append(
			`<div class="slider__scale-mark slider__scale-mark_${direction}" style="${this.view.offsetDirection}:${offset}px"></div>`
		);
		const parentElement = $(`${this.view.root} .slider__scale`).children(
			".slider__scale-mark"
		)[i];

		$(parentElement).append(
			`<div class="slider__scale-number slider__scale-number_${direction}" >${values[i]}</div>`
		);

		offset += this.view.size / (values.length - 1);
	}
};

export default createScaleMarks;
