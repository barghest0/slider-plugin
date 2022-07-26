import { SliderParams } from 'components/Slider/types';

enum APINames {
  getParams = 'getParams',
  getContainer = 'getContainer',
  getParent = 'getParent',
  getSliderInstance = 'getSliderInstance',
  updateParams = 'updateParams',
  subscribe = 'subscribe',
  unsubscribe = 'unsubscribe',
}

type SubscribeCallback = (params: SliderParams) => void;

export { APINames, SubscribeCallback };
