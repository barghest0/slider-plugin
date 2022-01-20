import Presenter from "../Presenter";

const subscribe = function (this: Presenter) {
	this.view.thumbView.subscribe(
		"UpdateThumbModelValue",
		this.updateThumbModelValue.bind(this)
	);

	this.thumbs.forEach((thumb) =>
		thumb.subscribe("UpdateTipView", this.updateTipView.bind(this))
	);

	this.thumbs.forEach((thumb) =>
		thumb.subscribe("UpdateThumbView", this.updateThumbView.bind(this))
	);

	this.view.trackView.subscribe(
		"UpdateThumbModelBeforeTrackClick",
		this.updateThumbModelBeforeTrackClick.bind(this)
	);
	this.view.trackView.subscribe(
		"UpdateTrackModelFill",
		this.updateTrackFillModelState.bind(this)
	);

	this.trackModel.subscribe(
		"UpdateThumbModelValue",
		this.updateThumbModelValue.bind(this)
	);

	this.trackModel.subscribe(
		"UpdateTrackFillView",
		this.updateTrackFillView.bind(this)
	);


};

export default subscribe;
