import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';
import { SINGLE_SLIDER } from 'components/Slider/constants';
import { getParamsFromDataset, getValidatedParams } from 'utils/validators';

function slider(this: JQuery, params?: UserSliderParams) {
  const sliderItem = this[SINGLE_SLIDER];
  const validatedParams = getValidatedParams(params || {});
  const paramsFromDataset = getParamsFromDataset(
    $(sliderItem),
    validatedParams,
  );
  const sliderInstance = new Slider(sliderItem, paramsFromDataset);

  return sliderInstance;
}

export default slider;
