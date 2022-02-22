import { SubscribersNames } from '../../../types/slider';
import Panel from '../Panel';

function handleValueChange(this: Panel, event: Event, valueIndex: number) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  this.slider.getParams().value[valueIndex] = Number(value);

  this.notify(SubscribersNames.updateParams, this.slider.getParams());
}

export default handleValueChange;
