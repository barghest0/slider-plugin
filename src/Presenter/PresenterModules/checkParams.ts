import { Direction, SliderParams, UserSliderParams } from "../../utils/interfaces";

const checkParams = function (params: UserSliderParams, DOMroot: HTMLElement): SliderParams {
	const data = DOMroot.dataset;
	const dataValues = data.firstValue && data.secondValue ? [+data.firstValue, +data.secondValue] : 0;
	let {
		min = +data.min! || 0,
		max = +data.max! || 100,
		step = +data.step! || 10,
		value = dataValues,
		isRange = Boolean(data.isRange)! || false,
		direction = data.direction! as Direction || 'horizontal',
		hasFill = Boolean(data.hasFill)! || true,
		hasTips = Boolean(data.hasTips)! || true,
		hasScale = Boolean(data.hasScale)! || true,
		isDecimal = Boolean(data.isDecimal)! || false,
		decimalPlaces = +data.decimalPlaces! || 0,
	} = params;



	if (!Array.isArray(value)) value = [value];
	if (isRange && value.length === 1) value.push(value[0]);

	value[0] = Math.max(min, value[0]);
	value[0] = Math.min(max, value[0]);

	if (isRange) {
		value[1] = Math.max(min, value[1]);
		value[1] = Math.min(max, value[1]);
		value[1] = Math.max(value[0], value[1]);
	}


	if (min >= max - step) min = max - step;
	if (max <= min + step) max = min + step;




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
