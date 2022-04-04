import Slider from '../Slider/Slider';
import { getParamsFromDataset, getValidatedParams } from '../utils/validators';
import { UserSliderParams } from '../types/slider';

function slider(this: JQuery, params?: UserSliderParams) {
  const sliderInstances: Slider[] = [];

  this.each((_index, sliderItem) => {
    const validatedParams = getValidatedParams(params || {});
    const paramsFromDataset = getParamsFromDataset(this, validatedParams);

    const sliderInstance = new Slider(sliderItem, paramsFromDataset);
    sliderInstances.push(sliderInstance);
  });

  return sliderInstances;
}

export default slider;
