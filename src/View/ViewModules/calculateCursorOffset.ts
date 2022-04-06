import { MAX_PERCENTS } from '../../Slider/constants';

import { Direction, Directions } from '../../Slider/types';

function calculateCursorOffset(
  coordinate: number,
  direction: Direction,
  DOMroot: HTMLElement,
  size: number,
) {
  if (direction === Directions.horizontal) {
    return ((coordinate - DOMroot.offsetLeft) / size) * MAX_PERCENTS;
  }
  return ((coordinate - DOMroot.offsetTop) / size) * MAX_PERCENTS;
}

export default calculateCursorOffset;
