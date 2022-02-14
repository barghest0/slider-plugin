import { Directions, SubscribersNames } from '../../../../utils/interfaces';
import Thumb from '../Thumb';

function handleDrag(e: any, thisThumb: Thumb, stance: number) {
  const { direction, isRange } = thisThumb.view.params;
  const { DOMroot, size } = thisThumb.view;
  const coordinate = direction === Directions.horizontal ? e.pageX : e.pageY;

  const cursorOffset = thisThumb.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );
  const currentStance = isRange ? thisThumb.validateCollision(stance) : stance;

  thisThumb.notify(SubscribersNames.updateThumb, currentStance, cursorOffset);
}

export default handleDrag;
