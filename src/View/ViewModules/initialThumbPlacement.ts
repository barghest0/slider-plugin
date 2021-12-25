import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialThumbPlacement = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let thumbsOffset =
		direction === "horizontal"
			? this.thumbView.offset[stance]
			: 100 - this.thumbView.offset[stance];

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: thumbsOffset + "%",
	});

};

export default initialThumbPlacement;
