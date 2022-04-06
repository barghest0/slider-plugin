import Slider from '../components/Slider/Slider';

import { getParamsFromDataset, getValidatedParams } from '../utils/validators';

import { UserSliderParams } from '../components/Slider/types';

function slider(this: JQuery, params?: UserSliderParams) {
  const sliderItem = this[0];
  const validatedParams = getValidatedParams(params || {});
  const paramsFromDataset = getParamsFromDataset($(sliderItem), validatedParams);
  const sliderInstance = new Slider(sliderItem, paramsFromDataset);

  return sliderInstance;
}

export default slider;
