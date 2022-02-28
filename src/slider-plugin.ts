import Slider from './Slider';
import slider from './slider-template';
import { UserSliderParams } from './types/slider';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): Slider;
  }
}

$.fn.extend({
  slider,
});
