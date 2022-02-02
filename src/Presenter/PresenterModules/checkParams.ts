import { Direction, SliderParams, UserSliderParams } from "../../utils/interfaces";

const checkParams = function (params: UserSliderParams, DOMroot: HTMLElement): SliderParams {
	const data = DOMroot.dataset;
	const values = data.firstValue && data.secondValue ? [+data.firstValue, +data.secondValue] : 0;
	let {
		min = +data.min! || 0,
		max = +data.max! || 100,
		step = +data.step! || 10,
		value = values,
		isRange = Boolean(data.isRange)! || false,
		direction = data.direction! as Direction || 'horizontal',
		hasFill = Boolean(data.hasFill)! || true,
		hasTips = Boolean(data.hasTips)! || true,
		hasScale = Boolean(data.hasScale)! || true,
		isDecimal = Boolean(data.isDecimal)! || false,
		decimalPlaces = +data.decimalPlaces! || 0,
	} = params;




	if (!Array.isArray(value)) value = [value];

	if (value[0] < min) value[0] = min;
	if (value[0] > max) value[0] = max;

	if (value[1] > max) value[1] = max;
	if (value[1] < min) value[1] = min;

	if (value[0] > value[1]) {
		value[1] = value[0];
	}

	if (min >= max - step) min = max - step;
	if (max <= min + step) max = min + step;

	if (isRange && value.length === 1) value.push(value[0]);

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
};

export default checkParams;
