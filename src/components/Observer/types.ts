import { SliderParams } from 'components/Slider/types';

type SubscriberFn = (values: number[], params: SliderParams) => void;

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
  updateThumbAfterScaleMarkClick = 'UpdateThumbAfterScaleMarkClick',
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
