import { Direction } from '../../GlobalUtils/interfaces';
import View from '../View';

const prepareDirectionForInteraction = function prepareDirectionForInteraction(
  this: View,
  direction: Direction,
) {
  

  this.offsetDirection = direction === 'horizontal' ? 'left' : 'top';
  this.fillDirection = direction === 'horizontal' ? 'width' : 'height';
};

export default prepareDirectionForInteraction;
