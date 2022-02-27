import { DEFAULT_SLIDER_PARAMS } from '../../../constants/slider';
import { UserSliderParams } from '../../../types/slider';

function validateDefaultParams(params: UserSliderParams) {
  return {
    min: params.min || DEFAULT_SLIDER_PARAMS.min,
    max: params.max || DEFAULT_SLIDER_PARAMS.max,
    value: params.value || DEFAULT_SLIDER_PARAMS.value,
    decimalPlaces: params.decimalPlaces || DEFAULT_SLIDER_PARAMS.decimalPlaces,
    step: params.step || DEFAULT_SLIDER_PARAMS.step,
    isRange: params.isRange || DEFAULT_SLIDER_PARAMS.isRange,
    direction: params.direction || DEFAULT_SLIDER_PARAMS.direction,
    hasFill: params.hasFill || DEFAULT_SLIDER_PARAMS.hasFill,
    hasTips: params.hasTips || DEFAULT_SLIDER_PARAMS.hasTips,
    hasScale: params.hasScale || DEFAULT_SLIDER_PARAMS.hasScale,
    isDecimal: params.isDecimal || DEFAULT_SLIDER_PARAMS.isDecimal,
    panel: params.panel || DEFAULT_SLIDER_PARAMS.panel,
  };
}

export default validateDefaultParams;
