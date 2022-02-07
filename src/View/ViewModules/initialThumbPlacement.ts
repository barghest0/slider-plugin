import View from '../View';

const initialThumbPlacement = function (this: View, offset: number, stance: number) {
	this.thumbView.updateThumbPosition(offset, stance);
};

export default initialThumbPlacement;
