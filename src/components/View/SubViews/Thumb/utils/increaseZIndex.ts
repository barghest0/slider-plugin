import { UPPER_Z_INDEX } from '../constants';
import Thumb from '../Thumb';

function increaseZIedex(this: Thumb) {
  this.thumbs.forEach((thumb, stance) => {
    if (stance === this.getActiveStance()) {
      thumb.style.zIndex = UPPER_Z_INDEX;
    }
  });
}

export default increaseZIedex;
