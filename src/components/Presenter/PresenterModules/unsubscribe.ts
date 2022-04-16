import Presenter from '../Presenter';

import { ModelSubscribersNames, ViewSubscribersNames } from '../../Observer/types';

function unsubscribe(this: Presenter) {
  this.view.thumbView.unsubscribe(ViewSubscribersNames.updateThumb, this.updateThumb);
  this.view.trackView.unsubscribe(
    ViewSubscribersNames.updateThumbAfterTrackClick,
    this.updateThumbAfterTrackClick,
  );

  this.model.unsubscribe(ModelSubscribersNames.getSliderParams, this.getSliderParams);
  this.model.unsubscribe(ModelSubscribersNames.updateThumbView, this.updateThumbView);

  if (!this.getParams().hasFill) {
    this.model.unsubscribe(ModelSubscribersNames.updateFillView, this.updateFillView);
  }

  if (!this.getParams().hasTips) {
    this.model.unsubscribe(ModelSubscribersNames.updateThumbView, this.updateTipView);
  }

  return this;
}

export default unsubscribe;
