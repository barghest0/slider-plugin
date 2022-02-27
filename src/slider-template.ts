import Slider from './Slider';
import { UserSliderParams } from './types/slider';

function slider(this: JQuery, params?: UserSliderParams) {
  const sliderInstance = new Slider(this[0], params);

  return {
    unsubscribe: sliderInstance.presenter.unsubscribe,
    addPanel: sliderInstance.addControlPanel,
  };
}

export default slider;
