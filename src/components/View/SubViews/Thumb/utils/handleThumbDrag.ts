import Thumb from '../Thumb';

import { Directions } from 'components/Slider/types';

import { ViewSubscribersNames } from 'components/Observer/types';

function handleThumbDrag(this: Thumb, event: PointerEvent, stance: number) {
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
  this.setActiveStance(stance);

  this.notify(ViewSubscribersNames.updateThumb);
}

export default handleThumbDrag;
