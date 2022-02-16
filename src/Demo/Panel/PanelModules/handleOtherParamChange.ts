import validateParams from '../../../Presenter/PresenterModules/validateParams';
import { InitMods } from '../../../@types/slider';
import Panel from '../Panel';

function handleOtherParamChange(this: Panel, event: Event, param: string) {
  const target = <HTMLInputElement>event.target;
  const { value } = target;
  const isNumberParam = target.type === 'number';

  this.params[param] = isNumberParam ? +value : target.checked;

  this.parent.init(validateParams(this.params, this.DOMroot), InitMods.rebuild);
  this.parent.panel.initializeFormValues(
    validateParams(this.params, this.DOMroot),
  );
}
export default handleOtherParamChange;
