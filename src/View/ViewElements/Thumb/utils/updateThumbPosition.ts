import { Direction } from '../../../../utils/interfaces';
import Thumb from '../Thumb';

const updateThumbPosition = function (this: Thumb, offset: number, stance: number) {
  this.thumbs[stance].style[this.view.offsetDirection] = `${offset}%`;
};

export default updateThumbPosition;
