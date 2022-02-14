import { SubscribersNames } from '../../utils/interfaces';
import Presenter from '../Presenter';

function subscribe(this: Presenter) {
  this.view.thumbView.subscribe(SubscribersNames.updateThumb, this.updateThumb);
  this.view.thumbView.subscribe(SubscribersNames.updateFill, this.updateFill);

  this.view.trackView.subscribe(
    SubscribersNames.updateThumbBeforeTrackClick,
    this.updateThumbBeforeTrackClick,
  );
  this.view.trackView.subscribe(SubscribersNames.updateFill, this.updateFill);

  this.model.subscribe(SubscribersNames.updateThumbView, this.updateThumbView);
  this.model.subscribe(SubscribersNames.updateTipView, this.updateTipView);
  this.model.subscribe(SubscribersNames.updateFillView, this.updateFillView);

  this.model.subscribe(
    SubscribersNames.updateValues,
    this.updateValues.bind(this),
  );
}

export default subscribe;
