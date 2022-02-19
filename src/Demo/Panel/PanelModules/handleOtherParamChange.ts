import validateParams from '../../../Presenter/PresenterModules/validateParams';
import { SubscribersNames } from '../../../types/slider';

import Panel from '../Panel';

function handleOtherParamChange(this: Panel, event: Event, param: string) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const isNumberParam = target.type === 'number';
  this.slider.getParams()[param] = isNumberParam ? +value : target.checked;
  const validatedParams = validateParams(this.slider.getParams(), this.DOMroot);
  this.notify(SubscribersNames.updateParams, validatedParams);
}
export default handleOtherParamChange;
