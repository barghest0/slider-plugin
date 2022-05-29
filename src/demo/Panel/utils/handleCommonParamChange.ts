import Panel from '../Panel';
import { NUMBER_TYPE } from '../constants';

function handleCommonParamChange(this: Panel, event: Event, param: string) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const isNumberParam = target.type === NUMBER_TYPE;
  const params = this.slider.getParams();
  params[param] = isNumberParam ? Number(value) : target.checked;

  this.updatePanelParams(params);
}
export default handleCommonParamChange;
