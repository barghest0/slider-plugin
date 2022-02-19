import { SubscribersNames } from '../../types/slider';
import Presenter from '../Presenter';

function subscribe(this: Presenter) {
  this.view.thumbView.subscribe(SubscribersNames.updateThumb, this.updateThumb);
  this.view.thumbView.subscribe(SubscribersNames.updateFill, this.updateFill);
  this.view.trackView.subscribe(
    SubscribersNames.updateThumbAfterTrackClick,
    this.updateThumbAfterTrackClick,
  );
  this.view.trackView.subscribe(SubscribersNames.updateFill, this.updateFill);

  this.model.subscribe(SubscribersNames.updateThumbView, this.updateThumbView);
  if (this.model.getParams().hasTips) {
    this.model.subscribe(SubscribersNames.updateThumbView, this.updateTipView);
  }
  this.model.subscribe(SubscribersNames.updateFillView, this.updateFillView);

  return this;
}

export default subscribe;
