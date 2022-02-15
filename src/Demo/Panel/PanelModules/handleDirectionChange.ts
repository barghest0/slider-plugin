import validateParams from '../../../Presenter/PresenterModules/validateParams/validateParams';
import { Directions, InitMods } from '../../../utils/interfaces';
import Panel from '../Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  this.params.direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;

  this.parent.init(validateParams(this.params, this.DOMroot), InitMods.rebuild);
  this.parent.panel.initializeFormValues(
    validateParams(this.params, this.DOMroot),
  );
}

export default handleDirectionChange;
