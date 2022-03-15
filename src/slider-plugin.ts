import Slider from './Slider';
import slider from './slider-template';
import { UserSliderParams } from './types/slider';
import './Style/slider.scss';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): Slider;
  }
}

$.fn.extend({
  slider,
});
