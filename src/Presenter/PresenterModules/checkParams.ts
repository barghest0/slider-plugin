import { FIRST_THUMB_STANCE, SECOND_THUMB_STANCE } from '../../utils/constants';
import { Direction, SliderParams, UserSliderParams } from '../../utils/interfaces';

function checkParams(params: UserSliderParams, DOMroot: HTMLElement): SliderParams {
	const data = DOMroot.dataset;
	const values = data.firstValue && data.secondValue ? [+data.firstValue, +data.secondValue] : 0;

	let {
		min = Number(data.min) || 0,
		max = Number(data.max) || 100,
		value = values,
		decimalPlaces = Number(data.decimalPlaces) || 0,
	} = params;

	const {
		step = Number(data.step) || 10,
		isRange = Boolean(data.isRange) || false,
		direction = (data.direction as Direction) || 'horizontal',
		hasFill = Boolean(data.hasFill) || true,
		hasTips = Boolean(data.hasTips) || true,
		hasScale = Boolean(data.hasScale) || true,
		isDecimal = Boolean(data.isDecimal) || false,
	} = params;

	if (!Array.isArray(value)) value = [value];
	if (isRange && value.length === 1) value.push(value[FIRST_THUMB_STANCE]);

	value[FIRST_THUMB_STANCE] = Math.max(min, value[FIRST_THUMB_STANCE]);
	value[FIRST_THUMB_STANCE] = Math.min(max, value[FIRST_THUMB_STANCE]);

	if (isRange) {
		value[SECOND_THUMB_STANCE] = Math.max(min, value[SECOND_THUMB_STANCE]);
		value[SECOND_THUMB_STANCE] = Math.min(max, value[SECOND_THUMB_STANCE]);
		value[SECOND_THUMB_STANCE] = Math.max(value[FIRST_THUMB_STANCE], value[SECOND_THUMB_STANCE]);
	}

	if (min >= max - step) min = max - step;
	if (max <= min + step) max = min + step;

	decimalPlaces = Math.min(decimalPlaces, 3);

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

export default checkParams;
