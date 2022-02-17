import { Directions, InitMods } from '../../../types/slider';
import Panel from '../Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  this.params.direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;
}

export default handleDirectionChange;
