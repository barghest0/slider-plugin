import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialViewRender = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: Array.isArray(this.thumbView.value)
			? this.thumbView.value[stance] / (this.ends.max / 100) + "%"
			: this.thumbView.value / (this.ends.max / 100) + "%",
	});
	$(".slider__fill").css({
		[fillDirection]: Array.isArray(this.thumbView.value)
			? this.thumbView.value[stance] / (this.ends.max / 100) + "%"
			: this.thumbView.value / (this.ends.max / 100) + "%",
	});
};

export default initialViewRender;
