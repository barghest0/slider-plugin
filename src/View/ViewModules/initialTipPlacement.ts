import View from '../View';

const initialTipPlacement = function (this: View, stance: number) {
	this.tipView.updateTipsPosition(stance);
};

export default initialTipPlacement;
