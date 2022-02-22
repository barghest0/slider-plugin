import { DEFAULT_SLIDER_PARAMS } from '../../../constants/slider';
import { Direction, UserSliderParams } from '../../../types/slider';

function validateDefaultParams(params: UserSliderParams, DOMroot: HTMLElement) {
  const data = DOMroot.dataset;
  const values =
    data.firstValue && data.secondValue
      ? [+data.firstValue, +data.secondValue]
      : DEFAULT_SLIDER_PARAMS.value;

  const {
    min = Number(data.min) || DEFAULT_SLIDER_PARAMS.min,
    max = Number(data.max) || DEFAULT_SLIDER_PARAMS.max,
    value = values,
    decimalPlaces = Number(data.decimalPlaces) || DEFAULT_SLIDER_PARAMS.decimalPlaces,
    step = Number(data.step) || DEFAULT_SLIDER_PARAMS.step,
    isRange = Boolean(data.isRange) || DEFAULT_SLIDER_PARAMS.isRange,
    direction = <Direction>data.direction || DEFAULT_SLIDER_PARAMS.direction,
    hasFill = Boolean(data.hasFill) || DEFAULT_SLIDER_PARAMS.hasFill,
    hasTips = Boolean(data.hasTips) || DEFAULT_SLIDER_PARAMS.hasTips,
    hasScale = Boolean(data.hasScale) || DEFAULT_SLIDER_PARAMS.hasScale,
    isDecimal = Boolean(data.isDecimal) || DEFAULT_SLIDER_PARAMS.isDecimal,
  } = params;

  return {
    min,
    max,
    value,
    decimalPlaces,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
    isDecimal,
    step,
  };
}

export default validateDefaultParams;
