import { Directions } from '../../Slider/types';

import Panel from '../Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  this.slider.getParams().direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;

  this.updatePanelParams(this.slider.getParams());
}

export default handleDirectionChange;
