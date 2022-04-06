import { UserSliderParams } from './components/Slider/types';
import Slider from './components/Slider/Slider';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): Slider;
  }
}
