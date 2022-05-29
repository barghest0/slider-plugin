import Model from 'components/Model';
import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';
import { SliderParams } from 'components/Slider/types';

import validateFirstThumb from './validationParamsMethods/validateFirstThumb';
import validateMin from './validationParamsMethods/validateMin';
import validateSecondThumb from './validationParamsMethods/validateSecondThumb';
import validateStep from './validationParamsMethods/validateStep';

function validateParams(
  this: Model,
  {
    min,
    max,
    value,
    step,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
    panel,
    canThumbPush,
  }: SliderParams,
) {
  const validatedValue = value;
  const validatedStep = validateStep(step, min, max);
  const validatedMin = validateMin(min, max, validatedStep);

  validatedValue[FIRST_THUMB_STANCE] = validateFirstThumb(
    validatedValue,
    min,
    max,
  );

  if (isRange) {
    validatedValue[SECOND_THUMB_STANCE] = validateSecondThumb(
      validatedValue,
      min,
      max,
    );
  }

  const validatedParams: SliderParams = {
    min: validatedMin,
    max,
    step: validatedStep,
    value: validatedValue,
    isRange,
    direction,
    hasFill,
    hasTips,
    hasScale,
    panel,
    canThumbPush,
  };

  return validatedParams;
}

export default validateParams;
