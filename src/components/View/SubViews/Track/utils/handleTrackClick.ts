import { Directions, SubscribersNames } from '../../../../Slider/types';
import Track from '../Track';

function handleTrackClick(this: Track, event: PointerEvent) {
  const { direction } = this.view.getParams();
  const { DOMroot } = this.view;
  const size = this.view.getSize();
  const coordinate = direction === Directions.horizontal ? event.pageX : event.pageY;
  const cursorOffset = this.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );
  this.notify(SubscribersNames.updateThumbAfterTrackClick, cursorOffset);
}

export default handleTrackClick;
