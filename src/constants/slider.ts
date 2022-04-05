import { SliderParams } from '../types/slider';

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
  isDecimal: false,
  decimalPlaces: 0,
  panel: false,
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
const TRACK_CLASS = 'slider__track';
const THUMB_CLASS = 'slider__thumb';
const FILL_CLASS = 'slider__fill';
const SCALE_CLASS = 'slider__scale';
const TIP_CLASS = 'slider__tip';

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
  TRACK_CLASS,
  THUMB_CLASS,
  FILL_CLASS,
  SCALE_CLASS,
  TIP_CLASS,
  INVALID_STEP,
  SINGLE_SLIDER,
};
