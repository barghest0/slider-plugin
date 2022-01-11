import { Direction } from "../../../../Interfaces/interfaces";
import Tip from "../Tip";

const updateTipsPosition = function (
	this: Tip,
	stance: number,
	dragDirection: string
) {
	$(`.slider__tip-${stance}`).css({
		[dragDirection]: this.parentElement.thumbView.offset[stance] + "%",
	});
	console.log(this.parentElement.thumbView.decimalPlaces);

	$(`.slider__tip-${stance}`).html(
		this.parentElement.thumbView.value[stance].toFixed(
			this.parentElement.thumbView.decimalPlaces
		)
	);
};

export default updateTipsPosition;
