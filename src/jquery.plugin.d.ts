import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';

import { APINames } from 'plugin/types';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): void;
    slider(method?: UserSliderParams): HTMLElement | void;
    slider(
      method?: APINames,
      params?: UserSliderParams,
    ): Slider | HTMLElement | void;
    slider(method: APINames.getSliderInstance): Slider;
  }
}
