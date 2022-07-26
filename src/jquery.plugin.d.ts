import Slider from 'components/Slider/Slider';
import { SliderParams, UserSliderParams } from 'components/Slider/types';

import { APINames } from 'plugin/types';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): void;
    slider(
      method?: UserSliderParams,
    ): HTMLElement | SliderParams | Slider | void;
    slider(
      method?: APINames,
      params?: UserSliderParams,
    ): HTMLElement | SliderParams | Slider | void;
  }
}
