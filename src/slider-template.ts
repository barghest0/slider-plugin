import { DEFAULT_SLIDER_PARAMS, FIRST_VALUE, SECOND_VALUE } from './constants/slider';
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
  const isValuesValid = value[FIRST_VALUE] || value[SECOND_VALUE];
  const validatedValue = isValuesValid ? value : DEFAULT_SLIDER_PARAMS.value;
  if (isRange && validatedValue.length === 1) {
    validatedValue.push(validatedValue[FIRST_VALUE]);
  }
  const validatedMin = min || DEFAULT_SLIDER_PARAMS.min;
  const validatedMax = max || DEFAULT_SLIDER_PARAMS.max;
  const validatedDecimalPlaces = decimalPlaces || DEFAULT_SLIDER_PARAMS.decimalPlaces;
  const validatedStep = step || DEFAULT_SLIDER_PARAMS.step;
  const validatedIsRange = isRange || DEFAULT_SLIDER_PARAMS.isRange;
  const validatedDirection = direction || DEFAULT_SLIDER_PARAMS.direction;
  const validatedHasFill = hasFill || DEFAULT_SLIDER_PARAMS.hasFill;
  const validatedHasTips = hasTips || DEFAULT_SLIDER_PARAMS.hasTips;
  const validatedHasScale = hasScale || DEFAULT_SLIDER_PARAMS.hasScale;
  const validatedIsDecimal = isDecimal || DEFAULT_SLIDER_PARAMS.isDecimal;
  const validatedPanel = panel || DEFAULT_SLIDER_PARAMS.panel;
  const validatedOnChange = onChange || DEFAULT_SLIDER_PARAMS.onChange;

  return {
    min: validatedMin,
    max: validatedMax,
    value: validatedValue,
    decimalPlaces: validatedDecimalPlaces,
    step: validatedStep,
    isRange: validatedIsRange,
    direction: validatedDirection,
    hasFill: validatedHasFill,
    hasTips: validatedHasTips,
    hasScale: validatedHasScale,
    isDecimal: validatedIsDecimal,
    panel: validatedPanel,
    onChange: validatedOnChange,
  };
}

function slider(this: JQuery, params?: UserSliderParams) {
  const sliderInstances: Slider[] = [];

  this.each((_index, sliderItem) => {
    const dataParams = getParamsFromDataset(this, params || {});
    const validatedParams = getValidatedParams(dataParams);
    const sliderInstance = new Slider(sliderItem, validatedParams);
    console.log(validatedParams);

    sliderInstances.push(sliderInstance);
  });

  return sliderInstances;
}

export default slider;
