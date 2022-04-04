import { DEFAULT_SLIDER_PARAMS, SINGLE_SLIDER } from '../src/constants/slider';
import '../src/Plugin/plugin';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const root = '#slider-1';
  const slider = $(root).slider()[SINGLE_SLIDER];

  test('correct set/get params ', () => {
    expect(slider.getParams()).toEqual(DEFAULT_SLIDER_PARAMS);
  });
});
