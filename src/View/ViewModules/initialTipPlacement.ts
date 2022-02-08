import View from '../View';

function initialTipPlacement(this: View, stance: number) {
	this.tipView.updateTipsPosition(stance);
}

export default initialTipPlacement;
