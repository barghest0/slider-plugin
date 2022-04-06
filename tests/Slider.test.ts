import '../src/Plugin/plugin';

import { DEFAULT_SLIDER_PARAMS } from '../src/constants/slider';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  document.body.innerHTML += `<div id="slider-2" class="slider-2" data-first-value="10" data-min="0" data-max="200"></div>`;
  const root = '.slider-1';
  const slider = $(root).slider();

  test('correct set/get params ', () => {
    expect(slider.getParams()).toEqual(DEFAULT_SLIDER_PARAMS);
  });

  test('correct get container', () => {
    expect(slider.getContainer().classList.contains(root.slice(1))).toBeTruthy();
  });

  test('correct get parent', () => {
    expect(slider.getParent()).toBeInstanceOf(HTMLBodyElement);
  });

  test('expect change isRange to true after updateParams call', () => {
    slider.updateParams({ isRange: true });
    expect(slider.getParams().isRange).toEqual(true);
  });

  const root2 = '.slider-2';
  const slider2 = $(root2).slider();

  test('expect set data attributes after initialization slider', () => {
    expect(slider2.getParams().min).toEqual(0);
    expect(slider2.getParams().max).toEqual(200);
    expect(slider2.getParams().value[0]).toEqual(10);
  });
});
