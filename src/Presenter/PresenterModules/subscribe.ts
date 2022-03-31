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

  this.model.subscribe(SubscribersNames.updateFillView, this.updateFillView);
  this.model.subscribe(SubscribersNames.updateThumbView, this.updateThumbView);
  this.model.subscribe(SubscribersNames.updateParams, this.updateViewParams);

  if (this.model.getParams().hasTips) {
    this.model.subscribe(SubscribersNames.updateThumbView, this.updateTipView);
  }

  if (this.model.getParams().panel) {
    this.view.panelView.subscribe(SubscribersNames.updateParams, this.updateModelParams);
    this.model.subscribe(
      SubscribersNames.updatePanelValues,
      this.updatePanelValuesAfterThumbDrag,
    );
  }

  return this;
}

export default subscribe;
