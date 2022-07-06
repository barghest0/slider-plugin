import {
  MAX_OFFSET,
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
} from 'components/Slider/constants';
import prepareOffset from 'utils/prepareOffset';

import { UPPER_Z_INDEX } from '../constants';
import Thumb from '../Thumb';

function increaseZIndexOnMax(this: Thumb) {
  const firstThumbOffset = this.getOffset()[FIRST_OFFSET];
  const { direction } = this.view.getParams();

  if (firstThumbOffset === prepareOffset(MAX_OFFSET, direction)) {
    this.thumbs[FIRST_THUMB_STANCE].style.zIndex = UPPER_Z_INDEX;
  }
}

export default increaseZIndexOnMax;
