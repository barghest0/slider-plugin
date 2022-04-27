import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
} from '../../Slider/constants';
import Model from '../Model';

function validateCollision(this: Model) {
  const isFirstStanceCurrent = this.getActiveStance() === FIRST_THUMB_STANCE;

  const firstOffset = this.getOffset()[FIRST_OFFSET];
  const secondOffset = this.getOffset()[SECOND_OFFSET];

  const firstValue = this.getValue()[FIRST_THUMB_STANCE];
  const secondValue = this.getValue()[SECOND_THUMB_STANCE];

  const isFirstThumbBiggerSecond = firstOffset > secondOffset;
  const isSecondThumbLessFirst = secondOffset < firstOffset;

  if (isFirstThumbBiggerSecond && isFirstStanceCurrent) {
    this.setOffset(SECOND_THUMB_STANCE, firstOffset);
    this.setValue(SECOND_THUMB_STANCE, firstValue);
  }

  if (isSecondThumbLessFirst && !isFirstStanceCurrent) {
    this.setOffset(FIRST_THUMB_STANCE, secondOffset);
    this.setValue(FIRST_THUMB_STANCE, secondValue);
  }
}

export default validateCollision;
