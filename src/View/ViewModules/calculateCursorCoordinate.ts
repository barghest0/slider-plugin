import { Direction } from '../../GlobalUtils/interfaces';

const calculateCursorCoordinate = function (coord: number, direction: Direction, DOMroot: HTMLElement, size: number) {
  if (direction === 'horizontal') {
    return ((coord - DOMroot.getBoundingClientRect().left) / size) * 100;
  }
  return ((coord - DOMroot.getBoundingClientRect().top) / size) * 100;
};

export default calculateCursorCoordinate;
