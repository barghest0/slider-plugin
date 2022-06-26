import { ViewSubscribersNames } from 'components/Observer/types';

import Scale from '../Scale';

function handleScaleMarkClick(
  this: Scale,
  _event: PointerEvent,
  offset: number,
) {
  this.setCursorOffset(offset);

  this.notify(ViewSubscribersNames.updateThumbAfterScaleMarkClick);
}

export default handleScaleMarkClick;
