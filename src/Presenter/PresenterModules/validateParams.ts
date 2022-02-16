import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from '../../constants/slider';
import { SliderParams, UserSliderParams } from '../../@types/slider';
import validateDefaultParams from './validationParamsMethods/validateDefaultParams';
import validateDecimalPlaces from './validationParamsMethods/validateDecimalPlaces';
import validateFirstThumb from './validationParamsMethods/validateFirstThumb';
import validateMin from './validationParamsMethods/validateMin';
import validateSecondThumb from './validationParamsMethods/validateSecondThumb';
import validateStep from './validationParamsMethods/validateStep';
import validateValue from './validationParamsMethods/validateValue';

function validateParams(
  params: UserSliderParams,
  DOMroot: HTMLElement,
): SliderParams {
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
  } = validateDefaultParams(params, DOMroot);

  const validatedValue = validateValue(value);
  const validatedStep = validateStep(step, min, max);
  const validatedMin = validateMin(min, max, validatedStep);
  const validatedDecimalPlaces = validateDecimalPlaces(decimalPlaces, 3);
  validatedValue[FIRST_THUMB_STANCE] = validateFirstThumb(
    validatedValue,
    min,
    max,
  );
  const isSingleThumb = validatedValue.length === 1;

  if (isRange) {
    if (isSingleThumb) {
      validatedValue.push(validatedValue[FIRST_THUMB_STANCE] + step);
    }
    validatedValue[SECOND_THUMB_STANCE] = validateSecondThumb(
      validatedValue,
      min,
      max,
    );
  }

  const checkedParams: SliderParams = {
    min: validatedMin,
    max,
    step: validatedStep,
    value: validatedValue,
    decimalPlaces: validatedDecimalPlaces,
    isDecimal,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
  };

  if (params.onChange) checkedParams.onChange = params.onChange;

  return checkedParams;
}

export default validateParams;
