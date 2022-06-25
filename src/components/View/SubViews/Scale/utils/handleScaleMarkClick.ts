import { ViewSubscribersNames } from 'components/Observer/types';
import { Directions } from 'components/Slider/types';

import Scale from '../Scale';

function handleScaleMarkClick(this: Scale, event: PointerEvent) {
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

  this.notify(ViewSubscribersNames.updateThumbAfterScaleMarkClick);
}

export default handleScaleMarkClick;
