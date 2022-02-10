import { FIRST_THUMB_STANCE, SECOND_THUMB_STANCE } from '../../../utils/constants';

function validateSecondThumb(value: number[], min: number, max: number) {
	const validatedValue = value;
	
	validatedValue[SECOND_THUMB_STANCE] = Math.max(min, value[SECOND_THUMB_STANCE]);
	validatedValue[SECOND_THUMB_STANCE] = Math.min(max, value[SECOND_THUMB_STANCE]);
	validatedValue[SECOND_THUMB_STANCE] = Math.max(
		validatedValue[FIRST_THUMB_STANCE],
		validatedValue[SECOND_THUMB_STANCE],
	);

	return validatedValue[SECOND_THUMB_STANCE];
}

export default validateSecondThumb;
