import slider from './slider';
import '../assets/style/slider.scss';

import DEFAULT_SELECTOR from './constants';

$.fn.extend({
  slider,
});

const sliders = document.querySelectorAll(DEFAULT_SELECTOR);
sliders.forEach(sliderItem => {
  $(sliderItem).slider();
});
