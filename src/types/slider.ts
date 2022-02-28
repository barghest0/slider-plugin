type Ends = {
  min: number;
  max: number;
};
type Direction = 'vertical' | 'horizontal';
type OffsetDirection = 'left' | 'top';
type FillDirection = 'width' | 'height';
type onChange<T> = (params: T) => void;

type SliderParams = {
  [index: string]:
  | number
  | string
  | number[]
  | Direction
  | boolean
  | onChange<SliderParams>
  | undefined;
  min: number;
  max: number;
  step: number;
  value: number[];
  isRange: boolean;
  direction: Direction;
  hasFill: boolean;
  hasTips: boolean;
  hasScale: boolean;
  isDecimal: boolean;
  decimalPlaces: number;
  onChange?: onChange<SliderParams>;
  panel: boolean;
};

type UserSliderParams = {
  [index: string]:
  | number
  | string
  | number[]
  | Direction
  | boolean
  | onChange<SliderParams>
  | undefined;
  min?: number;
  max?: number;
  step?: number;
  value?: number[] | number;
  isRange?: boolean;
  direction?: Direction;
  hasFill?: boolean;
  hasTips?: boolean;
  hasScale?: boolean;
  isDecimal?: boolean;
  panel?: boolean;
  decimalPlaces?: number;
  onChange?: onChange<SliderParams>;
};

type SliderTrackState = {
  ends: Ends;
  size: number;
  isRange: boolean;
  direction: Direction;
  hasFill: boolean;
  hasTips: boolean;
  hasScale: boolean;
};

type SliderThumbState = {
  step: number;
  value: number;
  isDecimal: boolean;
  decimalPlaces: number;
  stepCount: number;
  stepPercent: number;
  offset: number;
  stepOffset: number;
};

type SliderFillState = {
  fillOffset: number;
  fillSize: number;
};

enum SubscribersNames {
  updateThumb = 'UpdateThumb',
  updateThumbAfterTrackClick = 'UpdateThumbAfterTrackClick',
  updateFill = 'UpdateFill',
  updateThumbView = 'UpdateThumbView',
  updateFillView = 'UpdateFillView',
  updateParams = 'UpdateParams',
  updatePanelValues = 'UpdatePanelValues',
}

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
}

enum InitMods {
  init = 'init',
  rebuild = 'rebuild',
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
  Ends,
  SliderParams,
  UserSliderParams,
  Direction,
  SliderTrackState,
  SliderThumbState,
  SliderFillState,
  SubscribersNames,
  FillDirection,
  OffsetDirection,
  Directions,
  Params,
  InitMods,
  OffsetDirections,
  FillDirections,
};
