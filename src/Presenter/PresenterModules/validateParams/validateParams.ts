import { FIRST_THUMB_STANCE, SECOND_THUMB_STANCE } from '../../../utils/constants';
import { SliderParams, UserSliderParams } from '../../../utils/interfaces';
import getDefaultParams from './validateDefaultParams';
import validateDecimalPlaces from './validateDecimalPlaces';
import validateFirstThumb from './validateFirstThumb';
import validateMax from './validateMax';
import validateMin from './validateMin';
import validateSecondThumb from './validateSecondThumb';
import validateStep from './validateStep';
import validateValue from './validateValue';

function validateParams(params: UserSliderParams, DOMroot: HTMLElement): SliderParams {
	let { min, max, value, decimalPlaces, step } = getDefaultParams(params, DOMroot);
	const { isRange, direction, hasFill, hasTips, hasScale, isDecimal } = getDefaultParams(
		params,
		DOMroot,
	);

	
	value = validateValue(value);
	
	step = validateStep(step,min,max);
	
	min = validateMin(min, max, step);
	max = validateMax(min, max, step);
	
	decimalPlaces = validateDecimalPlaces(decimalPlaces, 3);
		
	
	value[FIRST_THUMB_STANCE] = validateFirstThumb(value, min, max);
	const isSingleThumb = value.length === 1
	
	if (isRange) {
		if (isSingleThumb) {
			value.push(value[FIRST_THUMB_STANCE] + step);
		}
		value[SECOND_THUMB_STANCE] = validateSecondThumb(value, min, max);
	}
	


	const checkedParams: SliderParams = {
		min,
		max,
		step,
		value,
		isRange,
		direction,
		hasFill,
		hasTips,
		hasScale,
		isDecimal,
		decimalPlaces,
	};

	if (params.onChange) checkedParams.onChange = params.onChange;

	return checkedParams;
}

export default validateParams;
