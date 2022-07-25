import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';

import { APINames } from 'plugin/types';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): void;
    slider(method?: UserSliderParams): HTMLElement | Slider;
    slider(
      method?: APINames,
      params?: UserSliderParams,
    ): HTMLElement | Slider | void;
  }
}
