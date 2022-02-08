import View from '../View';

function initialThumbPlacement(this: View, offset: number, stance: number) {
	this.thumbView.updateThumbPosition(offset, stance);
}

export default initialThumbPlacement;
