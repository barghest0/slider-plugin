import { DEFAULT_SLIDER_PARAMS } from '../src/constants/slider';

import '../src/slider-plugin';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const root = '#slider-1';
  const slider = $(root).slider()[0];

  test('correct set/get params ', () => {
    expect(slider.getParams()).toEqual(DEFAULT_SLIDER_PARAMS);
  });
});
