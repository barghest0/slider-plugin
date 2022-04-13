import { SliderParams } from '../Slider/types';

type SubscriberFn = (params: SliderParams) => void;

type Subscribers<T extends string> = Record<T, SubscriberFn[]>;

enum ModelSubscribersNames {
  updateThumbView = 'UpdateThumbView',
  updateFillView = 'UpdateFillView',
  updateParams = 'UpdateParams',
  updatePanelValues = 'UpdatePanelValues',
  getSliderParams = 'GetSliderParams',
}

enum ViewSubscribersNames {
  updateThumb = 'UpdateThumb',
  updateThumbAfterTrackClick = 'UpdateThumbAfterTrackClick',
}

type ViewObserver = ViewSubscribersNames;

type ModelObserver = ModelSubscribersNames;

export {
  SubscriberFn,
  Subscribers,
  ViewObserver,
  ModelObserver,
  ModelSubscribersNames,
  ViewSubscribersNames,
};
