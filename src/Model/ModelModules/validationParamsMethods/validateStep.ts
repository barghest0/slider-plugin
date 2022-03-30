import { MIN_STEP } from '../../../constants/slider';

function validateStep(step: number, min: number, max: number) {
  let validatedStep = Math.min(Math.abs(min - max), Math.abs(step));
  if (validatedStep === 0) validatedStep = MIN_STEP;

  return validatedStep;
}

export default validateStep;
