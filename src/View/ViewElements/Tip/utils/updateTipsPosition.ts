import { Direction } from "../../../../Interfaces/interfaces";
import Tip from "../Tip";

const updateTipsPosition = function (this: Tip, stance: number) {
	const direction = this.view.direction;
	const offset =
		direction === "horizontal"
			? this.view.thumbView.offset[stance]
			: 100 - this.view.thumbView.offset[stance];

	$(`${this.view.root} .slider__tip-${stance}`).css({
		[this.view.offsetDirection]: offset + "%",
	});

	$(`${this.view.root} .slider__tip-${stance}`).html(
		this.view.thumbView.value[stance].toFixed(
			this.view.thumbView.decimalPlaces
		)
	);
};

export default updateTipsPosition;
