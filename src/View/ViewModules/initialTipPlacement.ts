import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialTipPlacement = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let thumbsOffset =
		direction === "horizontal"
			? this.thumbView.offset[stance]
			: 100 - this.thumbView.offset[stance];

	$(`.slider__tip-${stance}`).css({
		[dragDirection]: thumbsOffset + "%",
	});
	$(`.slider__tip-${stance}`).html(
		this.thumbView.value[stance].toFixed(this.thumbView.decimalPlaces)
	);
};

export default initialTipPlacement;
