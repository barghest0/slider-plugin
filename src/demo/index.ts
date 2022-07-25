import Slider from 'components/Slider/Slider';
import { APINames } from 'plugin/types';

import Panel from './Panel/Panel';
import './components';
import './pages/index';
import './assets/style/index.scss';
import {
  FIRST_SLIDER_SELECTOR,
  FOURTH_SLIDER_SELECTOR,
  SECOND_SLIDER_SELECTOR,
  THIRD_SLIDER_SELECTOR,
} from './constants';

const sliders: Slider[] = [];

const initSlider = () => {
  $(FIRST_SLIDER_SELECTOR).slider();

  sliders.push(
    $(FIRST_SLIDER_SELECTOR).slider(APINames.getSliderInstance) as Slider,
  );

  $(SECOND_SLIDER_SELECTOR).slider({
    min: -6,
    max: 6,
    step: 1.5,
    value: [-3, 3],
    isRange: true,
    direction: 'vertical',
    hasFill: true,
    hasTips: true,
    hasScale: true,
  });

  sliders.push(
    $(SECOND_SLIDER_SELECTOR).slider(APINames.getSliderInstance) as Slider,
  );

  $(THIRD_SLIDER_SELECTOR).slider({
    min: -15000,
    max: 15000,
    step: 500,
    value: [-3000, 3000],
    isRange: true,
    direction: 'horizontal',
    hasFill: true,
    hasTips: true,
    hasScale: true,
  });

  sliders.push(
    $(THIRD_SLIDER_SELECTOR).slider(APINames.getSliderInstance) as Slider,
  );

  $(FOURTH_SLIDER_SELECTOR).slider({
    min: -10000000000000,
    max: 10000000000000,
    step: 10000000,
    value: 10000000,
    isRange: false,
    direction: 'vertical',
    hasFill: true,
    hasTips: true,
    hasScale: true,
  });

  sliders.push(
    $(FOURTH_SLIDER_SELECTOR).slider(APINames.getSliderInstance) as Slider,
  );

  sliders.forEach(slider => new Panel(slider));
};
window.addEventListener('DOMContentLoaded', initSlider);
