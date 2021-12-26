import { Direction } from "../../../../Interfaces/interfaces";

const createScaleMarks = (
	step: number,
	max: number,
	min: number,
	direction: Direction
) => {
	const offsetDirection = direction === "horizontal" ? "left" : "top";
	$(".slider__scale").append(
		`<div class="slider__scale-marks slider__scale-marks_${direction}"></div>`
	);
	// for (let i = 0; i <= max; i += step * 2) {
	// 	const stepCount = (max - min) / i;
	// 	const stepPercent = 100 / stepCount;
	// 	$(".slider__scale-marks").append(
	// 		`<div class="slider__scale-mark slider__scale-mark_${direction}" style="${offsetDirection}:${stepPercent}%"></div>`
	// 	);
	// }
};

export default createScaleMarks;
