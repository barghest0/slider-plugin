import { Direction } from '../../GlobalUtils/interfaces';

const prepareOffset = function (offset: number, direction: Direction) {
  return direction === 'horizontal' ? offset : 100 - offset;
};

export default prepareOffset;
