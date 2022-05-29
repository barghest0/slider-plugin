import Model from 'components/Model';
import { MAX_OFFSET } from 'components/Slider/constants';
import { Directions } from 'components/Slider/types';

function prepareOffset(this: Model, offset: number): number {
  const { direction } = this.getParams();
  return direction === Directions.horizontal ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;
