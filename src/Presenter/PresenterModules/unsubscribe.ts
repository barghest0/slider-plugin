import { SubscribersNames } from '../../@types/slider';
import Presenter from '../Presenter';

function unsubscribe(this: Presenter) {
  this.view.thumbView.unsubscribe(
    SubscribersNames.updateThumb,
    this.updateThumb,
  );
  this.view.thumbView.unsubscribe(SubscribersNames.updateFill, this.updateFill);

  this.view.trackView.unsubscribe(
    SubscribersNames.updateThumbBeforeTrackClick,
    this.updateThumbBeforeTrackClick,
  );
  this.view.trackView.unsubscribe(SubscribersNames.updateFill, this.updateFill);

  this.model.unsubscribe(
    SubscribersNames.updateThumbView,
    this.updateThumbView,
  );
  this.model.unsubscribe(SubscribersNames.updateTipView, this.updateTipView);
  this.model.unsubscribe(SubscribersNames.updateFillView, this.updateFillView);
  this.model.unsubscribe(SubscribersNames.updateValues, this.updateValues);
}

export default unsubscribe;
