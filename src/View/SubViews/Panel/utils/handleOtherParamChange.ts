import { NUMBER_TYPE } from '../../../../constants/panel';
import { SubscribersNames } from '../../../../types/slider';
import Panel from '../Panel';

function handleOtherParamChange(this: Panel, event: Event, param: string) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const isNumberParam = target.type === NUMBER_TYPE;
  this.view.getParams()[param] = isNumberParam ? Number(value) : target.checked;

  this.notify(SubscribersNames.updateParams, this.view.getParams());
}
export default handleOtherParamChange;
