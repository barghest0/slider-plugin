import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from '../../../utils/constants';
import { SliderParams, UserSliderParams } from '../../../utils/interfaces';
import validateDefaultParams from './validateDefaultParams';
import validateDecimalPlaces from './validateDecimalPlaces';
import validateFirstThumb from './validateFirstThumb';
import validateMax from './validateMax';
import validateMin from './validateMin';
import validateSecondThumb from './validateSecondThumb';
import validateStep from './validateStep';
import validateValue from './validateValue';

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
  const validatedMin = validateMin(min, max, step);
  const validatedMax = validateMax(min, max, step);
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
    max: validatedMax,
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
