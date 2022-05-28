type Direction = 'vertical' | 'horizontal';
type OffsetDirection = 'left' | 'top';
type FillDirection = 'width' | 'height';

type SliderParams = {
  [index: string]: number | string | number[] | Direction | boolean | undefined;
  min: number;
  max: number;
  step: number;
  value: number[];
  isRange: boolean;
  direction: Direction;
  hasFill: boolean;
  hasTips: boolean;
  hasScale: boolean;
  canThumbPush: boolean;
};

type UserSliderParams = {
  min?: number;
  max?: number;
  step?: number;
  value?: number[] | number;
  isRange?: boolean;
  direction?: Direction;
  hasFill?: boolean;
  hasTips?: boolean;
  hasScale?: boolean;
  canThumbPush?: boolean;
};

type SliderFillState = {
  fillOffset: number;
  fillSize: number;
};

enum Directions {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

enum Params {
  min = 'min',
  max = 'max',
  step = 'step',
  value = 'value',
  isRange = 'isRange',
  direction = 'direction',
  hasFill = 'hasFill',
  hasTips = 'hasTips',
  hasScale = 'hasScale',
  isDecimal = 'isDecimal',
  decimalPlaces = 'decimalPlaces',
  canThumbPush = 'canThumbPush',
  dataFirstValue = 'firstValue',
  dataSecondValue = 'secondValue',
}

enum OffsetDirections {
  left = 'left',
  top = 'top',
}

enum FillDirections {
  width = 'width',
  height = 'height',
}

export {
  SliderParams,
  UserSliderParams,
  Direction,
  SliderFillState,
  FillDirection,
  OffsetDirection,
  Directions,
  Params,
  OffsetDirections,
  FillDirections,
};
