import Track from '../Track';

import { ViewSubscribersNames } from 'components/Observer/types';

import { Directions } from 'components/Slider/types';

function handleTrackClick(this: Track, event: PointerEvent) {
  const { direction } = this.view.getParams();
  const { DOMroot } = this.view;
  const size = this.view.getSize();
  const coordinate =
    direction === Directions.horizontal ? event.pageX : event.pageY;
  const cursorOffset = this.view.calculateCursorOffset(
    coordinate,
    direction,
    DOMroot,
    size,
  );

  this.setCursorOffset(cursorOffset);

  this.notify(ViewSubscribersNames.updateThumbAfterTrackClick);
}

export default handleTrackClick;
