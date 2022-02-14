import Presenter from '../../Presenter';

function updateThumb(this: Presenter, stance: number, cursorOffset: number) {
	this.model.updateThumbValue(stance, cursorOffset);
}

export default updateThumb;
