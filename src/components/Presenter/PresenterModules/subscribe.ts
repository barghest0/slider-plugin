import Presenter from '../Presenter';

import {
  ModelSubscribersNames,
  ViewSubscribersNames,
} from '../../Observer/types';

function subscribe(this: Presenter) {
  this.view.thumbView.subscribe(
    ViewSubscribersNames.updateThumb,
    this.updateThumb,
  );
  this.view.trackView.subscribe(
    ViewSubscribersNames.updateThumbAfterTrackClick,
    this.updateThumbAfterTrackClick,
  );

  this.model.subscribe(
    ModelSubscribersNames.getSliderParams,
    this.getSliderParams,
  );
  this.model.subscribe(
    ModelSubscribersNames.updateThumbView,
    this.updateThumbView,
  );

  if (this.model.getParams().hasFill) {
    this.model.subscribe(
      ModelSubscribersNames.updateFillView,
      this.updateFillView,
    );
  }

  if (this.model.getParams().hasTips) {
    this.model.subscribe(
      ModelSubscribersNames.updateThumbView,
      this.updateTipView,
    );
  }

  return this;
}

export default subscribe;
