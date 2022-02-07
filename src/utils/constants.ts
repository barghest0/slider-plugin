import { SliderParams } from './interfaces';

const DEFAULT_SLIDER_PARAMS = {
	min: 0,
	max: 100,
	step: 10,
	value: [0],
	isRange: false,
	direction: 'horizontal',
	hasFill: true,
	hasTips: true,
	hasScale: true,
	isDecimal: false,
	decimalPlaces: 0,
};

const FIRST_THUMB_STANCE = 0;

const SECOND_THUMB_STANCE = 1;

const FIRST_VALUE = 0;

const SECOND_VALUE = 1;

const FIRST_OFFSET = 0;

const SECOND_OFFSET = 1;

const MAX_OFFSET = 100;

const MIN_OFFSET = 0;

export {
	DEFAULT_SLIDER_PARAMS,
	FIRST_THUMB_STANCE,
	SECOND_THUMB_STANCE,
	FIRST_VALUE,
	SECOND_VALUE,
	MAX_OFFSET,
	MIN_OFFSET,
	FIRST_OFFSET,
	SECOND_OFFSET,
};
