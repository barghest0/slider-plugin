import { Directions, SubscribersNames } from '../../../../utils/interfaces';
import Track from '../Track';

function handleClick(event: any, thisTrack: Track) {
  const { direction } = thisTrack.view.params;
  const coordinate =
    direction === Directions.horizontal ? event.pageX : event.pageY;
  const cursorOffset = thisTrack.view.calculateCursorOffset(
    coordinate,
    direction,
    thisTrack.view.DOMroot,
    thisTrack.view.size,
  );
  thisTrack.notify(SubscribersNames.updateThumbBeforeTrackClick, cursorOffset);
  thisTrack.notify(SubscribersNames.updateFill);
}

export default handleClick;
