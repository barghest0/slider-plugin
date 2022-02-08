import Presenter from '../../Presenter';

function updateThumbModelBeforeTrackClick(this: Presenter, cursorOffset: number) {
	this.trackModel.prepareChooseStance(cursorOffset);
}

export default updateThumbModelBeforeTrackClick;
