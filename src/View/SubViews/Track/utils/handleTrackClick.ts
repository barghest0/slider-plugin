import { Directions, SubscribersNames } from '../../../../types/slider';
import Track from '../Track';

function handleTrackClick(event: PointerEvent, thisTrack: Track) {
  const { direction, hasFill } = thisTrack.view.getParams();
  const { DOMroot } = thisTrack.view;
  const size = thisTrack.view.getSize();
  const coordinate = direction === Directions.horizontal ? event.pageX : event.pageY;
  const cursorOffset = thisTrack.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );
  thisTrack.notify(SubscribersNames.updateThumbAfterTrackClick, cursorOffset);
  if (hasFill) {
    thisTrack.notify(SubscribersNames.updateFill);
  }
}

export default handleTrackClick;
