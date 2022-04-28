import Model from '../Model';

import { MAX_OFFSET } from '../../Slider/constants';
import { Directions } from '../../Slider/types';

function prepareOffset(this: Model, offset: number): number {
  const { direction } = this.getParams();
  return direction === Directions.horizontal ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;