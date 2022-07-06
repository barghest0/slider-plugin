import { DEFAULT_Z_INDEX } from '../constants';
import Thumb from '../Thumb';

function decreaseInactiveZIndex(this: Thumb, activeStance: number) {
  this.thumbs.forEach((thumb, stance) => {
    if (stance !== activeStance) {
      thumb.style.zIndex = DEFAULT_Z_INDEX;
    }
  });
}

export default decreaseInactiveZIndex;
