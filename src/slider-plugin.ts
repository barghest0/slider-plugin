import Slider from './Slider';
import slider from './slider-template';
import { getParamsFromDataset, getValidatedParams } from './sliderValidators';
import './Style/slider.scss';
import { UserSliderParams } from './types/slider';

// (function f($: JQuery) {
$.fn.slider = function sliderTemplate(this: JQuery, params?: UserSliderParams) {
  const sliderInstances: Slider[] = [];

  this.each((_index, sliderItem) => {
    const dataParams = getParamsFromDataset(this, params || {});
    const validatedParams = getValidatedParams(dataParams);
    const sliderInstance = new Slider(sliderItem, validatedParams);
    sliderInstances.push(sliderInstance);
  });

  return sliderInstances;
};
// })(jQuery);
