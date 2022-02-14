import Presenter from '../../Presenter';

function updateThumbBeforeTrackClick(
	this: Presenter,
	cursorOffset: number,
	size: number,
) {
	this.model.prepareChooseStance(cursorOffset, size);
}

export default updateThumbBeforeTrackClick;
