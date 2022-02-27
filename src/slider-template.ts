import { DEFAULT_SLIDER_PARAMS } from './constants/slider';
import Slider from './Slider';
import { Direction, UserSliderParams } from './types/slider';

function getParamsFromDataset(element: JQuery, params: UserSliderParams) {
  let dataValue;

  if (element.data('firstValue') && element.data('secondValue')) {
    dataValue = [Number(element.data('firstValue')), Number(element.data('secondValue'))];
  } else {
    dataValue =
      Number(element.data('firstValue')) ||
      Number(element.data('secondValue')) ||
      DEFAULT_SLIDER_PARAMS.value;
  }
  const {
    min = Number(element.data('min')),
    max = Number(element.data('max')),
    value = dataValue,
    decimalPlaces = Number(element.data('decimalPlaces')),
    step = Number(element.data('step')),
    isRange = Boolean(element.data('isRange')),
    direction = <Direction>element.data('direction'),
    hasFill = Boolean(element.data('hasFill')),
    hasTips = Boolean(element.data('hasTips')),
    hasScale = Boolean(element.data('hasScale')),
    isDecimal = Boolean(element.data('isDecimal')),
    panel = Boolean(element.data('panel')),
  } = params;

  return {
    min,
    max,
    value,
    decimalPlaces,
    step,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
    isDecimal,
    panel,
  };
}

function slider(this: JQuery, params?: UserSliderParams) {
  const dataParams = getParamsFromDataset(this, params || DEFAULT_SLIDER_PARAMS);

  const sliderInstance = new Slider(this[0], dataParams);
  return {
    unsubscribe: sliderInstance.presenter.unsubscribe,
  };
}

export default slider;
