import { NUMBER_TYPE } from '../constants';
import Panel from '../Panel';

function handleCommonParamChange(this: Panel, event: Event, param: string) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const isNumberParam = target.type === NUMBER_TYPE;
  this.slider.getParams()[param] = isNumberParam ? Number(value) : target.checked;

  this.updatePanelParams(this.slider.getParams());
}
export default handleCommonParamChange;
