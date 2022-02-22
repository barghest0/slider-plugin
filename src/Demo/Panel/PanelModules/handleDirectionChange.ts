import { Directions, SubscribersNames } from '../../../types/slider';
import Panel from '../Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  this.slider.getParams().direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;

  this.notify(SubscribersNames.updateParams, this.slider.getParams());
}

export default handleDirectionChange;
