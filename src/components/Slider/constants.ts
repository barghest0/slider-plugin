import { SliderParams } from './types';

const DEFAULT_SLIDER_PARAMS: SliderParams = {
  min: 0,
  max: 100,
  step: 10,
  value: [0],
  isRange: false,
  direction: 'horizontal',
  hasFill: true,
  hasTips: true,
  hasScale: true,
};

const FIRST_THUMB_STANCE = 0;
const SECOND_THUMB_STANCE = 1;
const SINGLE_THUMB = 1;
const FIRST_VALUE = 0;
const SECOND_VALUE = 1;
const FIRST_OFFSET = 0;
const SECOND_OFFSET = 1;
const MAX_OFFSET = 100;
const MIN_OFFSET = 0;
const MIN_STEP = 1;
const INVALID_STEP = 0;
const MAX_DECIMAL_PLACES = 3;
const MIN_DECIMAL_PLACES = 0;

const PARENT_CLASS = 'slider-parent';
const MAIN_CLASS = 'slider';
const PREFIX = 'js';

const SINGLE_SLIDER = 0;

const MAX_PERCENTS = 100;

export {
  DEFAULT_SLIDER_PARAMS,
  MAX_DECIMAL_PLACES,
  MIN_DECIMAL_PLACES,
  FIRST_THUMB_STANCE,
  MAX_PERCENTS,
  MIN_STEP,
  SINGLE_THUMB,
  SECOND_THUMB_STANCE,
  FIRST_VALUE,
  SECOND_VALUE,
  MAX_OFFSET,
  MIN_OFFSET,
  FIRST_OFFSET,
  SECOND_OFFSET,
  PARENT_CLASS,
  MAIN_CLASS,
  INVALID_STEP,
  SINGLE_SLIDER,
  PREFIX,
};
