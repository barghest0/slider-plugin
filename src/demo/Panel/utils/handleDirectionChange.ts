import { Directions } from 'components/Slider/types';
import Panel from 'demo/Panel';

function handleDirectionChange(this: Panel, event: Event) {
  const target = <HTMLInputElement>event.target;
  const params = this.slider.getParams();
  params.direction = target.checked
    ? Directions.vertical
    : Directions.horizontal;

  this.updatePanelParams(params);
}

export default handleDirectionChange;
