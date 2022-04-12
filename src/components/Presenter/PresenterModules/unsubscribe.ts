import { SubscribersNames } from '../../Slider/types';

import Presenter from '../Presenter';

function unsubscribe(this: Presenter) {
  this.view.thumbView.unsubscribe(SubscribersNames.updateThumb, this.updateThumb);
  this.view.trackView.unsubscribe(
    SubscribersNames.updateThumbAfterTrackClick,
    this.updateThumbAfterTrackClick,
  );

  this.model.unsubscribe(SubscribersNames.getSliderParams, this.getSliderParams);
  this.model.unsubscribe(SubscribersNames.updateThumbView, this.updateThumbView);

  if (!this.getParams().hasFill) {
    this.model.unsubscribe(SubscribersNames.updateFillView, this.updateFillView);
  }

  if (!this.getParams().hasTips) {
    this.model.unsubscribe(SubscribersNames.updateThumbView, this.updateTipView);
  }

  return this;
}

export default unsubscribe;
