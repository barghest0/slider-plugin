import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';
import { SubscribeCallback } from 'plugin/types';

const getContainer = (slider: Slider) => {
  return slider.getContainer();
};

const getParent = (slider: Slider) => {
  return slider.getParent();
};

const getSliderInstance = (slider: Slider) => {
  return slider;
};

const getParams = (slider: Slider) => {
  return slider.getParams();
};

const updateParams = (slider: Slider, params: UserSliderParams) => {
  slider.updateParams(params);
};

const subscribe = (slider: Slider, callback: SubscribeCallback) => {
  slider.subscribe(callback);
};

const unsubscribe = (slider: Slider) => {
  slider.unsubscribe();
};

export {
  getSliderInstance,
  getContainer,
  getParent,
  getParams,
  updateParams,
  subscribe,
  unsubscribe,
};
