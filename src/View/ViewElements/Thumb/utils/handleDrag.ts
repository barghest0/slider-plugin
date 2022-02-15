import { Directions, SubscribersNames } from '../../../../utils/interfaces';
import Thumb from '../Thumb';

function handleDrag(event: any, thisThumb: Thumb, stance: number) {
  const { direction, isRange } = thisThumb.view.params;
  const { DOMroot, size } = thisThumb.view;
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

export default handleDrag;
