import { MAX_OFFSET, MIN_OFFSET } from '../../utils/constants';
import { Direction, Ends } from '../../utils/interfaces';
import ThumbModel from '../ThumbModel';

const endsValidation = function (this: ThumbModel, ends: Ends, direction: Direction) {
  if (this.getOffset() > MAX_OFFSET) {
    this.setOffset(MAX_OFFSET);
    this.setValue(direction === 'horizontal' ? ends.max : ends.min);
  }
  if (this.getOffset() < MIN_OFFSET) {
    this.setOffset(MIN_OFFSET);
    this.setValue(direction === 'horizontal' ? ends.min : ends.max);
  }
};

export default endsValidation;
