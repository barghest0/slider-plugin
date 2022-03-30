import { SINGLE_SLIDER } from './constants/slider';
import Slider from './Slider';
import { getParamsFromDataset, getValidatedParams } from './sliderValidators';
import { UserSliderParams } from './types/slider';

function slider(this: JQuery, params?: UserSliderParams) {
  const sliderInstances: Slider[] = [];

  this.each((_index, sliderItem) => {
    const dataParams = getParamsFromDataset(this, params || {});
    const validatedParams = getValidatedParams(dataParams);
    const sliderInstance = new Slider(sliderItem, validatedParams);
    sliderInstances.push(sliderInstance);
  });

  if (sliderInstances.length > SINGLE_SLIDER) {
    return sliderInstances;
  }

  return sliderInstances[SINGLE_SLIDER];
}

export default slider;
