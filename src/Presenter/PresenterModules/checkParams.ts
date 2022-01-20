import { SliderParams, UserSliderParams } from "../../Interfaces/interfaces";

const checkParams = function (params: UserSliderParams): SliderParams {
	let {
		min = 0,
		max = 100,
		step = 10,
		value = 0,
		isRange = false,
		direction = "horizontal",
		hasFill = true,
		hasTips = true,
		hasScale = true,
		isDecimal = false,
		decimalPlaces = 0,
	} = params;

	if (!Array.isArray(value)) {
		value = [value];
	}

	if (value[0] < min) value[0] = min;
	else if (value[1] > max) value[1] = max;

	if (isRange) {
		if (value.length === 1) {
			value.push(value[0]);
		}
	}

	if (value[0] > value[1]) {
		value[1] = value[0];
	}

	const checkedParams:SliderParams =  {
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
	return checkedParams
};

export default checkParams;
