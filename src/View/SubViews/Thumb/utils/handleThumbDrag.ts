import Thumb from '../Thumb';

import { Directions, SubscribersNames } from '../../../../types/slider';

function handleThumbDrag(event: PointerEvent, thisThumb: Thumb, stance: number) {
  const { direction, isRange, hasFill } = thisThumb.view.getParams();
  const { DOMroot } = thisThumb.view;
  const size = thisThumb.view.getSize();

  const coordinate = direction === Directions.horizontal ? event.pageX : event.pageY;

  const cursorOffset = thisThumb.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );

  const currentStance = isRange ? thisThumb.validateCollision(stance) : stance;

  thisThumb.notify(SubscribersNames.updateThumb, currentStance, cursorOffset);
  if (hasFill) {
    thisThumb.notify(SubscribersNames.updateFill);
  }
}

export default handleThumbDrag;
