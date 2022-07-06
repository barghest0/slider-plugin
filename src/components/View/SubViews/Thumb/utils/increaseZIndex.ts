import { UPPER_Z_INDEX } from '../constants';
import Thumb from '../Thumb';

function increaseZIndex(this: Thumb, activeStance: number) {
  this.thumbs.forEach((thumb, stance) => {
    if (stance === activeStance) {
      thumb.style.zIndex = UPPER_Z_INDEX;
    }
  });
}

export default increaseZIndex;
