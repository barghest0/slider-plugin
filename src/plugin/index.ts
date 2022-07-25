import { slider, createInlineSliders } from 'utils/slider-utils';

import '../style/slider.scss';

$.fn.extend({
  slider,
});

window.addEventListener('DOMContentLoaded', createInlineSliders);
