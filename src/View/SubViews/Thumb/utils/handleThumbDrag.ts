import { Directions, SubscribersNames } from '../../../../types/slider';
import Thumb from '../Thumb';

function handleThumbDrag(
  event: PointerEvent,
  thisThumb: Thumb,
  stance: number,
) {
  const { direction, isRange } = thisThumb.view.getParams();
  const { DOMroot } = thisThumb.view;
  const size = thisThumb.view.getSize();
  const coordinate =
    direction === Directions.horizontal ? event.pageX : event.pageY;

  const cursorOffset = thisThumb.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );

  const currentStance = isRange ? thisThumb.validateCollision(stance) : stance;
  thisThumb.notify(SubscribersNames.updateThumb, currentStance, cursorOffset);
  thisThumb.notify(SubscribersNames.updateFill);
}

export default handleThumbDrag;
