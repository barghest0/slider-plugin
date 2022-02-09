import {
	DEFAULT_SLIDER_PARAMS,
	FIRST_THUMB_STANCE,
	SECOND_THUMB_STANCE,
} from '../../utils/constants';
import { Direction, SliderParams, UserSliderParams } from '../../utils/interfaces';

function checkParams(params: UserSliderParams, DOMroot: HTMLElement): SliderParams {
	const data = DOMroot.dataset;
	const values =
		data.firstValue && data.secondValue
			? [+data.firstValue, +data.secondValue]
			: DEFAULT_SLIDER_PARAMS.value;

	let {
		min = Number(data.min) || DEFAULT_SLIDER_PARAMS.min,
		max = Number(data.max) || DEFAULT_SLIDER_PARAMS.max,
		value = values,
		decimalPlaces = Number(data.decimalPlaces) || DEFAULT_SLIDER_PARAMS.decimalPlaces,
	} = params;

	const {
		step = Number(data.step) || DEFAULT_SLIDER_PARAMS.step,
		isRange = Boolean(data.isRange) || DEFAULT_SLIDER_PARAMS.isRange,
		direction = (data.direction as Direction) || DEFAULT_SLIDER_PARAMS.direction,
		hasFill = Boolean(data.hasFill) || DEFAULT_SLIDER_PARAMS.hasFill,
		hasTips = Boolean(data.hasTips) || DEFAULT_SLIDER_PARAMS.hasTips,
		hasScale = Boolean(data.hasScale) || DEFAULT_SLIDER_PARAMS.hasScale,
		isDecimal = Boolean(data.isDecimal) || DEFAULT_SLIDER_PARAMS.isDecimal,
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
