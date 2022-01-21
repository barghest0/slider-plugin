import View from "../View";
import updateTipsPosition from '../ViewElements/Tip/utils/updateTipsPosition';

const initialTipPlacement = function (
	this: View,
	stance: number
) {
	updateTipsPosition.call(this.tipView, stance, this.thumbView.offset[stance]);

};

export default initialTipPlacement;
