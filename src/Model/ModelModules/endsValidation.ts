import { MAX_OFFSET, MIN_OFFSET } from '../../utils/constants';
import { Directions } from '../../utils/interfaces';
import Model from '../Model';

function endsValidation(this: Model, stance: number) {
  const { min, max, direction } = this.params;
  if (this.getOffset()[stance] > MAX_OFFSET) {
    this.setOffset(stance, MAX_OFFSET);
    this.setValue(stance, direction === Directions.horizontal ? max : min);
  }
  if (this.getOffset()[stance] < MIN_OFFSET) {
    this.setOffset(stance, MIN_OFFSET);
    this.setValue(stance, direction === Directions.horizontal ? min : max);
  }
}

export default endsValidation;
