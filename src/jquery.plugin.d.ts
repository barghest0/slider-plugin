import { UserSliderParams } from './types/slider';
import Slider from './Slider';

declare global {
  interface JQuery {
    slider(params?: UserSliderParams): Slider[];
  }
}
