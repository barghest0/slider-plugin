import View from "../View";

const initialTipPlacement = function (
	this: View,
	stance: number,
	offset: number,
	value: number
) {
	this.tipView.updateTipsPosition(offset, stance, value);

};

export default initialTipPlacement;
