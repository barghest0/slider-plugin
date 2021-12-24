import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialFillPlacement = function (this: View, direction: Direction) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	if (this.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: this.fillView.offset + "px",
			[fillDirection]: this.fillView.size + "px",
		});
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]: this.fillView.size + "px",
		});
	}
};

export default initialFillPlacement;
