import { INVALID_STEP, MIN_STEP } from 'components/Slider/constants';

function validateStep(step: number, min: number, max: number) {
  let validatedStep = Math.min(Math.abs(min - max), Math.abs(step));
  if (validatedStep === INVALID_STEP) validatedStep = MIN_STEP;

  return validatedStep;
}

export default validateStep;
