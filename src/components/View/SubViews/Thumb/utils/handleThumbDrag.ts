import Thumb from '../Thumb';

import { Directions, SubscribersNames } from '../../../../Slider/types';

function handleThumbDrag(this: Thumb, event: PointerEvent, stance: number) {
  const { direction, isRange } = this.view.getParams();
  const { DOMroot } = this.view;
  const size = this.view.getSize();

  const coordinate = direction === Directions.horizontal ? event.pageX : event.pageY;

  const cursorOffset = this.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );

  const currentStance = isRange ? this.validateCollision(stance) : stance;

  this.notify(SubscribersNames.updateThumb, currentStance, cursorOffset);
}

export default handleThumbDrag;
