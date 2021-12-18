import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialViewRender = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";
	let currentValue = Array.isArray(this.thumbView.value)
		? this.thumbView.value[stance] / (this.ends.max / 100)
		: this.thumbView.value / (this.ends.max / 100);

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: currentValue + "%",
	});

	if (this.isRange) {
		$(".slider__fill").css({
			//[dragDirection]: currentValue + "%",
			[fillDirection]: currentValue + "%",
		});
	} else {
		$(".slider__fill").css({
			[fillDirection]: currentValue + "%",
		});
	}
};

export default initialViewRender;
