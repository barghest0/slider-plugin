import { MAX_OFFSET } from 'components/Slider/constants';
import { Direction, Directions } from 'components/Slider/types';

function prepareOffset(offset: number, direction: Direction): number {
  return direction === Directions.horizontal ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;
