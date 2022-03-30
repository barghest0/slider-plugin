import {
  FIRST_THUMB_STANCE,
  FIRST_VALUE,
  SECOND_VALUE,
} from '../../../../constants/slider';
import Thumb from '../Thumb';

const validateCollision = function validateCollision(this: Thumb, stance: number) {
  const reverseStance = +!stance;
  const isFirstStanceCurrent = stance === FIRST_THUMB_STANCE;
  const isFirstValueBiggerSecond =
    this.view.getValue()[FIRST_VALUE] > this.view.getValue()[SECOND_VALUE];
  const isSecondValueLessFirst =
    this.view.getValue()[SECOND_VALUE] < this.view.getValue()[FIRST_VALUE];

  if (isFirstValueBiggerSecond && isFirstStanceCurrent) return reverseStance;

  if (isSecondValueLessFirst && !isFirstStanceCurrent) return reverseStance;

  return stance;
};

export default validateCollision;
