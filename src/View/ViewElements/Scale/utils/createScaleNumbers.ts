import { Direction } from "../../../../Interfaces/interfaces";
import Scale from '../Scale';

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
	// for (let i = 0; i <= max; i += step * 2) {
	// 	const stepCount = (max - min) / i;

	// 	const stepPercent = 100 / stepCount;

	// 	const numbersDirection =
	// 		direction === "horizontal" ? stepPercent : 100 - stepPercent;
	// 	$(".slider__scale-numbers").append(
	// 		`<div class="slider__scale-number slider__scale-number_${direction}" style="${offsetDirection}:calc(${numbersDirection}% - 10px )">${i}</div>`
	// 	);
	// }
};

export default createScaleNumbers;
