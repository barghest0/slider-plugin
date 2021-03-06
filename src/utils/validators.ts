import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_VALUE,
  SINGLE_THUMB,
} from 'components/Slider/constants';
import {
  Params,
  SliderParams,
  UserSliderParams,
} from 'components/Slider/types';

function getParamsFromDataset(element: JQuery, params: SliderParams) {
  let dataValue;

  const isBothDataValuesExist =
    element.data(Params.dataFirstValue) && element.data(Params.dataSecondValue);
  const isSingleDataValueExist =
    element.data(Params.dataFirstValue) || element.data(Params.dataSecondValue);

  if (isBothDataValuesExist) {
    dataValue = [
      Number(element.data(Params.dataFirstValue)),
      Number(element.data(Params.dataSecondValue)),
    ];
  } else if (isSingleDataValueExist) {
    dataValue = [Number(element.data(Params.dataFirstValue))] || [
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
  const canThumbPush =
    Boolean(element.data(Params.canThumbPush)) || params.canThumbPush;

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
    canThumbPush,
    hasScale,
    isDecimal,
  };
}

function getValidatedParams({
  min,
  max,
  value,
  step,
  isRange,
  direction,
  hasFill,
  hasTips,
  hasScale,
  canThumbPush,
}: UserSliderParams) {
  const validatedMin = min ?? DEFAULT_SLIDER_PARAMS.min;
  const validatedMax = max ?? DEFAULT_SLIDER_PARAMS.max;
  const validatedStep = step ?? DEFAULT_SLIDER_PARAMS.step;
  const validatedIsRange = isRange ?? DEFAULT_SLIDER_PARAMS.isRange;
  const validatedDirection = direction ?? DEFAULT_SLIDER_PARAMS.direction;
  const validatedHasFill = hasFill ?? DEFAULT_SLIDER_PARAMS.hasFill;
  const validatedHasTips = hasTips ?? DEFAULT_SLIDER_PARAMS.hasTips;
  const validatedHasScale = hasScale ?? DEFAULT_SLIDER_PARAMS.hasScale;
  const validatedCanThumbPush =
    canThumbPush ?? DEFAULT_SLIDER_PARAMS.canThumbPush;

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
    step: validatedStep,
    isRange: validatedIsRange,
    direction: validatedDirection,
    hasFill: validatedHasFill,
    hasTips: validatedHasTips,
    hasScale: validatedHasScale,
    canThumbPush: validatedCanThumbPush,
  };
}

export { getValidatedParams, getParamsFromDataset };
