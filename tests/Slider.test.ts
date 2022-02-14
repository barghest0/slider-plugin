import validateParams from '../src/Presenter/PresenterModules/validateParams/validateParams';
import Slider from '../src/Slider';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;

  const slider = new Slider('.slider-1', {});

  test('constructor test', () => {
    expect(slider.params).toEqual(validateParams({}, slider.DOMroot));
  });
});
