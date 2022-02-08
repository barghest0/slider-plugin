import { SubscribersNames } from '../../utils/interfaces';
import Presenter from '../Presenter';

function subscribe(this: Presenter) {
	this.view.thumbView.subscribe(SubscribersNames.updateThumbModel, this.updateThumbModel);
	this.view.thumbView.subscribe(SubscribersNames.updateTrackFillModel, this.updateTrackFillModel);

	this.view.trackView.subscribe(
		SubscribersNames.updateThumbModelBeforeTrackClick,
		this.updateThumbModelBeforeTrackClick,
	);

	this.view.trackView.subscribe(SubscribersNames.updateTrackFillModel, this.updateTrackFillModel);

	this.thumbs.forEach(thumb => thumb.subscribe(SubscribersNames.updateTipView, this.updateTipView));

	this.thumbs.forEach(thumb =>
		thumb.subscribe(SubscribersNames.updateThumbView, this.updateThumbView),
	);

	this.trackModel.subscribe(SubscribersNames.updateThumbModel, this.updateThumbModel);

	this.trackModel.subscribe(SubscribersNames.updateTrackFillView, this.updateTrackFillView);
}

export default subscribe;
