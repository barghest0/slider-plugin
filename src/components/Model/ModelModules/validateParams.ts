import validateDecimalPlaces from './validationParamsMethods/validateDecimalPlaces';
import validateFirstThumb from './validationParamsMethods/validateFirstThumb';
import validateMin from './validationParamsMethods/validateMin';
import validateSecondThumb from './validationParamsMethods/validateSecondThumb';
import validateStep from './validationParamsMethods/validateStep';

import Model from '../Model';

import {
  FIRST_THUMB_STANCE,
  MAX_DECIMAL_PLACES,
  SECOND_THUMB_STANCE,
} from '../../Slider/constants';
import { SliderParams } from '../../Slider/types';

function validateParams(
  this: Model,
  {
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
  }: SliderParams,
) {
  const validatedValue = value;
  const validatedStep = validateStep(step, min, max);
  const validatedMin = validateMin(min, max, validatedStep);
  const validatedDecimalPlaces = validateDecimalPlaces(
    decimalPlaces,
    MAX_DECIMAL_PLACES,
    isDecimal,
  );

  validatedValue[FIRST_THUMB_STANCE] = validateFirstThumb(validatedValue, min, max);

  if (isRange) {
    validatedValue[SECOND_THUMB_STANCE] = validateSecondThumb(validatedValue, min, max);
  }

  const validatedParams: SliderParams = {
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
    panel,
  };

  return validatedParams;
}

export default validateParams;
