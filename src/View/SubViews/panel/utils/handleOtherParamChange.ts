import { SubscribersNames } from '../../../../types/slider';
import Panel from '../Panel';

function handleOtherParamChange(this: Panel, event: Event, param: string) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const isNumberParam = target.type === 'number';
  this.view.getParams()[param] = isNumberParam ? +value : target.checked;

  this.notify(SubscribersNames.updateParams, this.view.getParams());
}
export default handleOtherParamChange;
