import slider from './slider-template';
import { UserSliderParams } from './types/slider';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): JQuery;
  }
}

$.fn.extend({
  slider,
});
