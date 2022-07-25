import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';
import { SubscribeCallback } from 'plugin/types';

const api = {
  getContainer(slider: Slider) {
    return slider.getContainer();
  },

  getParent(slider: Slider) {
    return slider.getParent();
  },

  getSliderInstance(slider: Slider) {
    return slider;
  },

  getParams(slider: Slider) {
    return slider.getParams();
  },

  updateParams(slider: Slider, params: UserSliderParams) {
    slider.updateParams(params);
  },

  subscribe(slider: Slider, callback: SubscribeCallback) {
    slider.subscribe(callback);
  },

  unsubscribe(slider: Slider) {
    slider.unsubscribe();
  },
};

export default api;
