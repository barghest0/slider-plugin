import { Direction } from "../../../../Interfaces/interfaces";

const createScaleNumbers = (
	step: number,
	max: number,
	min: number,
	direction: Direction
) => {
	const offsetDirection = direction === "horizontal" ? "left" : "top";
	$(".slider__scale").append(
		`<div class="slider__scale-numbers slider__scale-numbers_${direction}"></div>`
	);
	for (let i = 0; i <= max; i += step * 4) {
		const stepCount = (max - min) / i;
		const stepPercent = 100 / stepCount;

		const numbersDirection =
			direction === "horizontal" ? stepPercent : 100 - stepPercent;
		$(".slider__scale-numbers").append(
			`<div class="slider__scale-number slider__scale-number_${direction}" style="${offsetDirection}:calc(${numbersDirection}% - 10px )">${i}</div>`
		);
	}
};

export default createScaleNumbers;
