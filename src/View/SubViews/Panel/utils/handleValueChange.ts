import { SubscribersNames } from '../../../../Slider/types';
import Panel from '../Panel';

function handleValueChange(this: Panel, event: Event, valueIndex: number) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  this.view.getParams().value[valueIndex] = Number(value);

  this.notify(SubscribersNames.updateParams, this.view.getParams());
}

export default handleValueChange;
