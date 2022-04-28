import Presenter from '../Presenter';

import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from '../../Slider/constants';

function addListeners(this: Presenter) {
  const { isRange } = this.model.getParams();
  this.view.thumbView.dragAndDropThumb(FIRST_THUMB_STANCE);
  this.view.trackView.clickTrack();
  if (isRange) {
    this.view.thumbView.dragAndDropThumb(SECOND_THUMB_STANCE);
  }
  return this;
}

export default addListeners;