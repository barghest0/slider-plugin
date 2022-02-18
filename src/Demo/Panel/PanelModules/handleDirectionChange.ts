import validateParams from '../../../Presenter/PresenterModules/validateParams';
import { Directions, SubscribersNames } from '../../../types/slider';
import Panel from '../Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  this.slider.params.direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;
  const validatedParams = validateParams(this.slider.params, this.DOMroot);
  this.notify(SubscribersNames.updateParams, validatedParams);
}

export default handleDirectionChange;
