import { FIRST_THUMB_STANCE, SECOND_THUMB_STANCE } from '../../constants/slider';
import { SliderParams, UserSliderParams } from '../../types/slider';
import validateDefaultParams from './validationParamsMethods/validateDefaultParams';
import validateDecimalPlaces from './validationParamsMethods/validateDecimalPlaces';
import validateFirstThumb from './validationParamsMethods/validateFirstThumb';
import validateMin from './validationParamsMethods/validateMin';
import validateSecondThumb from './validationParamsMethods/validateSecondThumb';
import validateStep from './validationParamsMethods/validateStep';
import validateValue from './validationParamsMethods/validateValue';
import Model from '../Model';

function validateParams(this: Model, params: UserSliderParams): SliderParams {
  const {
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
  } = validateDefaultParams(params, this.DOMroot);

  const validatedValue = validateValue(value);
  const validatedStep = validateStep(step, min, max);
  const validatedMin = validateMin(min, max, validatedStep);
  const validatedDecimalPlaces = validateDecimalPlaces(decimalPlaces, 3);
  validatedValue[FIRST_THUMB_STANCE] = validateFirstThumb(validatedValue, min, max);
  const isSingleThumb = validatedValue.length === 1;
  if (isRange) {
    if (isSingleThumb) {
      validatedValue.push(validatedValue[FIRST_THUMB_STANCE] + step);
    }
    validatedValue[SECOND_THUMB_STANCE] = validateSecondThumb(validatedValue, min, max);
  }

  const validatedParams: SliderParams = {
    min: validatedMin,
    max,
    step: validatedStep,
    value: validatedValue,
    decimalPlaces: isDecimal ? validatedDecimalPlaces : 0,
    isDecimal,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
  };

  if (params.onChange) validatedParams.onChange = params.onChange;

  return validatedParams;
}

export default validateParams;
