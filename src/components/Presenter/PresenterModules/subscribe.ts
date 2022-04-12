import { SubscribersNames } from '../../Slider/types';

import Presenter from '../Presenter';

function subscribe(this: Presenter) {
  this.view.thumbView.subscribe(SubscribersNames.updateThumb, this.updateThumb);
  this.view.trackView.subscribe(
    SubscribersNames.updateThumbAfterTrackClick,
    this.updateThumbAfterTrackClick,
  );

  this.model.subscribe(SubscribersNames.getSliderParams, this.getSliderParams);
  this.model.subscribe(SubscribersNames.updateThumbView, this.updateThumbView);

  if (this.model.getParams().hasFill) {
    this.model.subscribe(SubscribersNames.updateFillView, this.updateFillView);
    this.view.thumbView.subscribe(SubscribersNames.updateFill, this.updateFill);
    this.view.trackView.subscribe(SubscribersNames.updateFill, this.updateFill);
  }

  if (this.model.getParams().hasTips) {
    this.model.subscribe(SubscribersNames.updateThumbView, this.updateTipView);
  }

  return this;
}

export default subscribe;
