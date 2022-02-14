type SubscribeEvent = (...data: any[]) => void;

interface Subscribers {
  [key: string]: SubscribeEvent[];
}

interface Ends {
  min: number;
  max: number;
}

type Direction = 'vertical' | 'horizontal';
type OffsetDirection = 'left' | 'top';
type FillDirection = 'width' | 'height';

interface SliderParams {
  [index: string]: any;
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
  onChange?: (params: SliderParams) => void;
}

interface UserSliderParams {
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
  decimalPlaces?: number;
  onChange?: (params: SliderParams) => void;
}

interface SliderTrackState {
  ends: Ends;
  size: number;
  isRange: boolean;
  direction: Direction;
  hasFill: boolean;
  hasTips: boolean;
  hasScale: boolean;
}

interface SliderThumbState {
  step: number;
  value: number;
  isDecimal: boolean;
  decimalPlaces: number;
  stepCount: number;
  stepPercent: number;
  offset: number;
  stepOffset: number;
}

interface SliderFillState {
  fillOffset: number;
  fillSize: number;
}

enum SubscribersNames {
  updateThumb = 'UpdateThumb',
  updateFill = 'UpdateFill',
  updateThumbBeforeTrackClick = 'UpdateThumbBeforeTrackClick',
  updateTipView = 'UpdateTipView',
  updateThumbView = 'UpdateThumbView',
  updateFillView = 'UpdateFillView',
  updateValues = 'UpdateValues',
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
  SubscribeEvent,
  Subscribers,
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
