import { Direction, Directions } from '../../types/slider';

function calculateCursorOffset(
  coordinate: number,
  direction: Direction,
  DOMroot: HTMLElement,
  size: number,
) {
  if (direction === Directions.horizontal) {
    return ((coordinate - DOMroot.offsetLeft) / size) * 100;
  }
  return ((coordinate - DOMroot.offsetTop) / size) * 100;
}

export default calculateCursorOffset;
