import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';
import Presenter from 'components/Presenter/Presenter';

function updateTipView(this: Presenter) {
  const { isRange } = this.model.getParams();
  this.view.tipView.updateTipText(FIRST_THUMB_STANCE);

  if (isRange) {
    this.view.tipView.updateTipText(SECOND_THUMB_STANCE);
  }
}

export default updateTipView;
