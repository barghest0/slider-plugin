import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';
import Model from 'components/Model/Model';
import prepareOffset from 'utils/prepareOffset';

function validateCollision(this: Model) {
  const { direction } = this.getParams();
  const isFirstStanceCurrent = this.getActiveStance() === FIRST_THUMB_STANCE;

  const firstOffset = this.getOffset()[FIRST_OFFSET];
  const secondOffset = this.getOffset()[SECOND_OFFSET];

  const firstValue = this.getValue()[FIRST_THUMB_STANCE];
  const secondValue = this.getValue()[SECOND_THUMB_STANCE];

  const isFirstValueBiggerSecond =
    prepareOffset(firstOffset, direction) >
    prepareOffset(secondOffset, direction);
  const isSecondValueLessFirst =
    prepareOffset(secondOffset, direction) <
    prepareOffset(firstOffset, direction);

  if (isFirstValueBiggerSecond && isFirstStanceCurrent) {
    if (this.getParams().canThumbPush) {
      this.setOffset(SECOND_THUMB_STANCE, firstOffset);
      this.setValue(SECOND_THUMB_STANCE, firstValue);
    } else {
      this.setOffset(FIRST_THUMB_STANCE, secondOffset);
      this.setValue(FIRST_THUMB_STANCE, secondValue);
    }
  }

  if (isSecondValueLessFirst && !isFirstStanceCurrent) {
    if (this.getParams().canThumbPush) {
      this.setOffset(FIRST_THUMB_STANCE, secondOffset);
      this.setValue(FIRST_THUMB_STANCE, secondValue);
    } else {
      this.setOffset(SECOND_THUMB_STANCE, firstOffset);
      this.setValue(SECOND_THUMB_STANCE, firstValue);
    }
  }
}

export default validateCollision;
