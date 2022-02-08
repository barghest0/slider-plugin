import Presenter from '../../Presenter';

function updateTrackFillView(this: Presenter, size: number, offset: number) {
	this.view.fillView.setSize(size);
	this.view.fillView.setOffset(offset);
	this.view.fillView.updateFill();
}

export default updateTrackFillView;
