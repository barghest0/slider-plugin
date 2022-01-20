import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialFillPlacement = function (this: View, direction: Direction) {



	if (this.isRange) {
		$(`${this.root} .slider__fill_${direction}`).css({
			[this.offsetDirection]: this.fillView.offset + "%",
			[this.fillDirection]: this.fillView.size + "%",
		});
	} else {
		$(`${this.root} .slider__fill_${direction}`).css({
			[this.fillDirection]: this.fillView.size + "%",
		});
	}
};

export default initialFillPlacement;
