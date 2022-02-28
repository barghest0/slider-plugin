import { DEFAULT_SLIDER_PARAMS, FIRST_VALUE } from './constants/slider';
import Slider from './Slider';
import { Direction, SliderParams, UserSliderParams } from './types/slider';

function getParamsFromDataset(element: JQuery, params: UserSliderParams) {
  let dataValue;

  if (element.data('firstValue') && element.data('secondValue')) {
    dataValue = [Number(element.data('firstValue')), Number(element.data('secondValue'))];
  } else {
    dataValue =
      [Number(element.data('firstValue'))] || [Number(element.data('secondValue'))] ||
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
    onChange,
  } = params;

  return {
    min,
    max,
    value: Array.isArray(value) ? value : [value],
    decimalPlaces,
    step,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
    isDecimal,
    panel,
    onChange,
  };
}

function getValidatedParams({
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
  onChange,
}: SliderParams) {
  return {
    min: min || DEFAULT_SLIDER_PARAMS.min,
    max: max || DEFAULT_SLIDER_PARAMS.max,
    value: value[FIRST_VALUE] ? value : DEFAULT_SLIDER_PARAMS.value,
    decimalPlaces: decimalPlaces || DEFAULT_SLIDER_PARAMS.decimalPlaces,
    step: step || DEFAULT_SLIDER_PARAMS.step,
    isRange: isRange || DEFAULT_SLIDER_PARAMS.isRange,
    direction: direction || DEFAULT_SLIDER_PARAMS.direction,
    hasFill: hasFill || DEFAULT_SLIDER_PARAMS.hasFill,
    hasTips: hasTips || DEFAULT_SLIDER_PARAMS.hasTips,
    hasScale: hasScale || DEFAULT_SLIDER_PARAMS.hasScale,
    isDecimal: isDecimal || DEFAULT_SLIDER_PARAMS.isDecimal,
    panel: panel || DEFAULT_SLIDER_PARAMS.panel,
    onChange: onChange || DEFAULT_SLIDER_PARAMS.onChange,
  };
}

function slider(this: JQuery, params?: UserSliderParams) {
  const dataParams = getParamsFromDataset(this, params || DEFAULT_SLIDER_PARAMS);
  const validatedParams = getValidatedParams(dataParams);

  const sliderInstance = new Slider(this[0], validatedParams);
  return sliderInstance;
}

export default slider;
