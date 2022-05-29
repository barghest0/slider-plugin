import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';
import Presenter from 'components/Presenter/Presenter';

function updateThumbView(this: Presenter) {
  const stance = this.model.getActiveStance();
  const { isRange } = this.model.getParams();

  const firstOffset = this.model.getOffset()[FIRST_THUMB_STANCE];
  const secondOffset = this.model.getOffset()[SECOND_THUMB_STANCE];

  const firstValue = this.model.getValue()[FIRST_THUMB_STANCE];
  const secondValue = this.model.getValue()[SECOND_THUMB_STANCE];

  this.view.thumbView.setActiveStance(stance);

  this.view.thumbView.setOffset(FIRST_THUMB_STANCE, firstOffset);
  this.view.setValue(FIRST_THUMB_STANCE, firstValue);
  this.view.thumbView.updateThumbStyle(FIRST_THUMB_STANCE);

  if (isRange) {
    this.view.setValue(SECOND_THUMB_STANCE, secondValue);
    this.view.thumbView.setOffset(SECOND_THUMB_STANCE, secondOffset);
    this.view.thumbView.updateThumbStyle(SECOND_THUMB_STANCE);
  }
}

export default updateThumbView;
