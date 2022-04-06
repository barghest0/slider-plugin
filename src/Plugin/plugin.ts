import slider from './slider';

import '../Style/slider.scss';

$.fn.extend({
  slider,
});

const sliders = document.querySelectorAll('[data-slider="true"]');
sliders.forEach(sliderItem => {
  $(sliderItem).slider();
});
