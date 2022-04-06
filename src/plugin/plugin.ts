import slider from './slider';

import '../style/slider.scss';

$.fn.extend({
  slider,
});

const sliders = document.querySelectorAll('[data-slider="true"]');
sliders.forEach(sliderItem => {
  $(sliderItem).slider();
});
