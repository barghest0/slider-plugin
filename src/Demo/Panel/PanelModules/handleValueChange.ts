import validateParams from '../../../Presenter/PresenterModules/validateParams';
import { SubscribersNames } from '../../../types/slider';
import Panel from '../Panel';

function handleValueChange(this: Panel, event: Event, valueIndex: number) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  this.params.value[valueIndex] = Number(value);
  const validatedParams = validateParams(this.params, this.DOMroot);
  this.notify(SubscribersNames.updateParams, validatedParams);
}

export default handleValueChange;
