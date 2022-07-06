import { DEFAULT_Z_INDEX } from '../constants';
import Thumb from '../Thumb';

function decreaseZIndex(this: Thumb) {
  this.thumbs.forEach((thumb, stance) => {
    if (stance !== this.getActiveStance()) {
      thumb.style.zIndex = DEFAULT_Z_INDEX;
    }
  });
}

export default decreaseZIndex;
