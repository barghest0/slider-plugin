import { SliderParams } from '../Slider/types';

type SubscriberFn = (params: SliderParams) => void;

type Subscribers<T extends string> = Record<T, SubscriberFn[]>;

type ViewObserver = 'UpdateThumb' | 'UpdateThumbAfterTrackClick';

type ModelObserver =
  | 'UpdateThumbView'
  | 'UpdateTipView'
  | 'UpdateFillView'
  | 'GetSliderParams';
export { SubscriberFn, Subscribers, ViewObserver, ModelObserver };
