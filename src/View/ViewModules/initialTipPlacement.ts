import View from "../View";
import updateTipsPosition from '../ViewElements/Tip/utils/updateTipsPosition';

const initialTipPlacement = function (
	this: View,
	stance: number,
	offset: number
) {
	this.tipView.updateTipsPosition(offset, stance);

};

export default initialTipPlacement;
