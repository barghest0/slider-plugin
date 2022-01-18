import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialFillPlacement = function (this: View, direction: Direction) {
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";


	if (this.isRange) {
		$(`${this.root} .slider__fill_${direction}`).css({
			[dragDirection]: this.fillView.offset + "px",
			[fillDirection]: this.fillView.size + "px",
		});
	} else {
		$(`${this.root} .slider__fill_${direction}`).css({
			[fillDirection]: this.fillView.size + "px",
		});
	}
};

export default initialFillPlacement;
