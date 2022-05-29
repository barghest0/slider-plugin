import { FIRST_THUMB_STANCE } from 'components/Slider/constants';

function validateFirstThumb(value: number[], min: number, max: number) {
  const validatedValue = value;
  validatedValue[FIRST_THUMB_STANCE] = Math.max(
    min,
    validatedValue[FIRST_THUMB_STANCE],
  );
  validatedValue[FIRST_THUMB_STANCE] = Math.min(
    max,
    validatedValue[FIRST_THUMB_STANCE],
  );

  return validatedValue[FIRST_THUMB_STANCE];
}

export default validateFirstThumb;
