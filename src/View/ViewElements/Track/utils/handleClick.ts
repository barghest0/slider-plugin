import { Directions, SubscribersNames } from '../../../../utils/interfaces';
import Track from '../Track';

function handleClick(e: any, thisTrack: Track) {
  const { direction } = thisTrack.view.params;
  const coordinate = direction === Directions.horizontal ? e.pageX : e.pageY;
  const cursorOffset = thisTrack.view.calculateCursorOffset(
    coordinate,
    direction,
    thisTrack.view.DOMroot,
    thisTrack.view.size,
  );
  thisTrack.notify(SubscribersNames.updateThumbBeforeTrackClick, cursorOffset);
}

export default handleClick;
