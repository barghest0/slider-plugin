import { SliderParams } from 'components/Slider/types';

type APINames =
  | 'getParams'
  | 'getContainer'
  | 'getParent'
  | 'getSliderInstance'
  | 'updateParams'
  | 'subscribe'
  | 'unsubscribe';

type SubscribeCallback = (values: number[], params: SliderParams) => void;

export { APINames, SubscribeCallback };
