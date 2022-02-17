import { MAX_OFFSET } from '../../constants/slider';
import { Directions } from '../../types/slider';
import Model from '../Model';

function prepareOffset(this: Model, offset: number): number {
  const { direction } = this.params;
  return direction === Directions.horizontal ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;
