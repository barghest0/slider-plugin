import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialThumbPlacement = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top";

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: `${this.thumbView.value[stance] / (this.ends.max / 100)
			}%`,
	});
};

export default initialThumbPlacement;
