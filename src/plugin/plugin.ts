import '../style/slider.scss';
import slider from './slider';
import DEFAULT_SELECTOR from './constants';

$.fn.extend({
  slider,
});

const sliders = document.querySelectorAll(DEFAULT_SELECTOR);
sliders.forEach(sliderItem => {
  $(sliderItem).slider();
});
