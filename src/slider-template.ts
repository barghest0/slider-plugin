import Slider from './Slider';
import { UserSliderParams } from './types/slider';

function slider(this: JQuery, params?: UserSliderParams) {
  const id = `#${this.attr('id')}`;
  const sliderInstance = new Slider(id, params);

  return {
    unsubscribe: sliderInstance.presenter.unsubscribe,
    addPanel: sliderInstance.addControlPanel,
  };
}

export default slider;
