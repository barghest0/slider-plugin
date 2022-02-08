import Presenter from '../../Presenter';

function updateTrackFillModel(this: Presenter, offset: number[]) {
	this.trackModel.updateTrackFill(offset);
}

export default updateTrackFillModel;
