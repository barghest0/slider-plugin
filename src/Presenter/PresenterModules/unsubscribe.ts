import { SubscribersNames } from '../../types/slider';
import Presenter from '../Presenter';

function unsubscribe(this: Presenter) {
  this.view.thumbView.unsubscribe(
    SubscribersNames.updateThumb,
    this.updateThumb,
  );
  this.view.thumbView.unsubscribe(SubscribersNames.updateFill, this.updateFill);
  this.view.trackView.unsubscribe(
    SubscribersNames.updateThumbAfterTrackClick,
    this.updateThumbAfterTrackClick,
  );
  this.view.trackView.unsubscribe(SubscribersNames.updateFill, this.updateFill);

  this.model.unsubscribe(
    SubscribersNames.updateThumbView,
    this.updateThumbView,
  );
  this.model.unsubscribe(SubscribersNames.updateThumbView, this.updateTipView);
  this.model.unsubscribe(SubscribersNames.updateFillView, this.updateFillView);
}

export default unsubscribe;
