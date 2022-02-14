import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  FIRST_VALUE,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
  SECOND_VALUE,
} from '../../../../utils/constants';
import Thumb from '../Thumb';

const validateCollision = function validateCollision(
  this: Thumb,
  stance: number,
) {
  const reverseStance = +!stance;
  if (stance === FIRST_THUMB_STANCE) {
    if (this.getValue()[FIRST_VALUE] > this.getValue()[SECOND_VALUE]) {
      this.setOffset(SECOND_THUMB_STANCE, this.getOffset()[FIRST_OFFSET]);
      return reverseStance;
    }
  } else if (this.getValue()[SECOND_VALUE] < this.getValue()[FIRST_VALUE]) {
    this.setOffset(FIRST_THUMB_STANCE, this.getOffset()[SECOND_OFFSET]);
    return reverseStance;
  }
  return stance;
};

export default validateCollision;
