import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialThumbPlacement = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let thumbOffset =
		direction === "horizontal"
			? this.thumbView.offset[stance]
			: 100 - this.thumbView.offset[stance];

	$(`${this.root} .slider__thumb-${stance}`).css({
		[dragDirection]: thumbOffset + "%",
	});
};

export default initialThumbPlacement;
