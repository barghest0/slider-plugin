import { Direction } from "../../Interfaces/interfaces";
import View from "../View";

const initialThumbPlacement = function (
	this: View,
	stance: number
) {
	
	
	$(`${this.root} .slider__thumb-${stance}`).css({
		[this.offsetDirection]: this.thumbView.offset[stance] + "%",
	});
};

export default initialThumbPlacement;
