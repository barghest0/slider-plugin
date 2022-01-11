import { Direction } from "../../../../Interfaces/interfaces";
import Tip from "../Tip";

const updateTipsPosition = function (
	this: Tip,
	stance: number,
	dragDirection: string
) {

	$(`${this.view.root} .slider__tip-${stance}`).css({
		[dragDirection]: this.view.thumbView.offset[stance] + "%",
	});


	$(`${this.view.root} .slider__tip-${stance}`).html(
		this.view.thumbView.value[stance].toFixed(
			this.view.thumbView.decimalPlaces
		)
	);
};

export default updateTipsPosition;
