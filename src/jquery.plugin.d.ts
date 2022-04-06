import { UserSliderParams } from './Slider/types';
import Slider from './Slider/Slider';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): Slider;
  }
}
