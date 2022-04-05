import { DEFAULT_SLIDER_PARAMS, FIRST_VALUE, SINGLE_THUMB } from '../constants/slider';

import { Direction, SliderParams, UserSliderParams } from '../types/slider';

function getParamsFromDataset(element: JQuery, params: SliderParams) {
  let dataValue;

  if (element.data('firstValue') && element.data('secondValue')) {
    dataValue = [Number(element.data('firstValue')), Number(element.data('secondValue'))];
  } else if (Number(element.data('firstValue')) || Number(element.data('secondValue'))) {
    dataValue = [Number(element.data('firstValue'))] || [
      Number(element.data('secondValue')),
    ];
  } else {
    dataValue = params.value;
  }

  const min = Number(element.data('min')) || params.min;
  const max = Number(element.data('max')) || params.max;
  const value = dataValue;
  const decimalPlaces = Number(element.data('decimalPlaces')) || params.decimalPlaces;
  const step = Number(element.data('step')) || params.step;
  const isRange = Boolean(element.data('isRange')) || params.isRange;
  const direction = <Direction>element.data('direction') || params.direction;
  const hasFill = Boolean(element.data('hasFill')) || params.hasFill;
  const hasTips = Boolean(element.data('hasTips')) || params.hasTips;
  const hasScale = Boolean(element.data('hasScale')) || params.hasScale;
  const isDecimal = Boolean(element.data('isDecimal')) || params.isDecimal;
  const panel = Boolean(element.data('panel')) || params.panel;

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
    onChange: params.onChange,
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
}: UserSliderParams) {
  const validatedMin = min ?? DEFAULT_SLIDER_PARAMS.min;
  const validatedMax = max ?? DEFAULT_SLIDER_PARAMS.max;
  const validatedDecimalPlaces = decimalPlaces ?? DEFAULT_SLIDER_PARAMS.decimalPlaces;
  const validatedStep = step ?? DEFAULT_SLIDER_PARAMS.step;
  const validatedIsRange = isRange ?? DEFAULT_SLIDER_PARAMS.isRange;
  const validatedDirection = direction ?? DEFAULT_SLIDER_PARAMS.direction;
  const validatedHasFill = hasFill ?? DEFAULT_SLIDER_PARAMS.hasFill;
  const validatedHasTips = hasTips ?? DEFAULT_SLIDER_PARAMS.hasTips;
  const validatedHasScale = hasScale ?? DEFAULT_SLIDER_PARAMS.hasScale;
  const validatedIsDecimal = isDecimal ?? DEFAULT_SLIDER_PARAMS.isDecimal;
  const validatedPanel = panel ?? DEFAULT_SLIDER_PARAMS.panel;
  const validatedOnChange = onChange ?? DEFAULT_SLIDER_PARAMS.onChange;

  let validatedValue = value ?? DEFAULT_SLIDER_PARAMS.value;

  if (!Array.isArray(validatedValue)) {
    validatedValue = [validatedValue];
  }

  if (isRange && validatedValue.length === SINGLE_THUMB) {
    validatedValue.push(validatedValue[FIRST_VALUE]);
  }

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

export { getValidatedParams, getParamsFromDataset };
