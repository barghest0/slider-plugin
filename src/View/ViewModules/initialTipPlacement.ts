import View from "../View";

const initialTipPlacement = function (
	this: View,
	stance: number
) {
	$(`${this.root} .slider__tip-${stance}`).css({
		[this.offsetDirection]: this.thumbView.offset[stance] + "%",
	});
	$(`${this.root} .slider__tip-${stance}`).html(
		this.thumbView.value[stance].toFixed(this.thumbView.decimalPlaces)
	);
};

export default initialTipPlacement;
