import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_VALUE,
  SINGLE_THUMB,
} from '../components/Slider/constants';

import { Params, SliderParams, UserSliderParams } from '../components/Slider/types';

function getParamsFromDataset(element: JQuery, params: SliderParams) {
  let dataValue;

  if (element.data(Params.datafirstValue) && element.data(Params.dataSecondValue)) {
    dataValue = [
      Number(element.data(Params.datafirstValue)),
      Number(element.data(Params.dataSecondValue)),
    ];
  } else if (
    Number(element.data(Params.datafirstValue)) ||
    Number(element.data(Params.dataSecondValue))
  ) {
    dataValue = [Number(element.data(Params.datafirstValue))] || [
      Number(element.data(Params.dataSecondValue)),
    ];
  } else {
    dataValue = params.value;
  }

  const min = Number(element.data(Params.min)) || params.min;
  const max = Number(element.data(Params.max)) || params.max;
  const value = dataValue;
  const decimalPlaces =
    Number(element.data(Params.decimalPlaces)) || params.decimalPlaces;
  const step = Number(element.data(Params.step)) || params.step;
  const isRange = Boolean(element.data(Params.isRange)) || params.isRange;
  const direction = element.data(Params.direction) || params.direction;
  const hasFill = Boolean(element.data(Params.hasFill)) || params.hasFill;
  const hasTips = Boolean(element.data(Params.hasTips)) || params.hasTips;
  const hasScale = Boolean(element.data(Params.hasScale)) || params.hasScale;
  const isDecimal = Boolean(element.data(Params.isDecimal)) || params.isDecimal;
  const panel = Boolean(element.data(Params.panel)) || params.panel;

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
