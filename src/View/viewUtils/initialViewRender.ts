import { Direction } from "../../utils/interfaces/interfaces";
import View from "../View";

const initialViewRender = function (this: View, direction: Direction) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	$(".slider__thumb").css({
		[dragDirection]: this.value / (this.ends.max / 100) + "%",
	});
	$(".slider__fill").css({
		[fillDirection]: this.value / (this.ends.max / 100) + "%",
	});
};

export default initialViewRender;
