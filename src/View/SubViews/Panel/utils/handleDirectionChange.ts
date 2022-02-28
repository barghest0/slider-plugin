import { Directions, SubscribersNames } from '../../../../types/slider';
import Panel from '../Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  this.view.getParams().direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;

  this.notify(SubscribersNames.updateParams, this.view.getParams());
}

export default handleDirectionChange;
