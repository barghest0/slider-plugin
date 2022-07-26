import { DEFAULT_SLIDER_PARAMS } from 'components/Slider/constants';
import Slider from 'components/Slider/Slider';
import { SliderParams, UserSliderParams } from 'components/Slider/types';
import 'plugin';
import { createInlineSliders } from 'utils/slider-utils';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  document.body.innerHTML += `<div id="slider-2" class="slider-2" data-first-value="10" data-min="0" data-max="200"></div>`;
  document.body.innerHTML += `<div data-slider="true"></div>`;

  const root = '.slider-1';
  $(root).slider();

  beforeEach(() => {
    $(root).slider('updateParams', DEFAULT_SLIDER_PARAMS);
    jest.clearAllMocks();
  });

  test('correct set/get params ', () => {
    const params = $(root).slider('getParams');
    expect(params).toEqual(DEFAULT_SLIDER_PARAMS);
  });

  test('correct set data instance', () => {
    const dataInstance = $(root).data('sliderInstance');
    expect(dataInstance).toEqual(0);
  });

  test('correct get container', () => {
    const container = $(root).slider('getContainer') as HTMLElement;
    expect(container.classList.contains(root.slice(1))).toBeTruthy();
  });

  test('correct get instance', () => {
    const instance = $(root).slider('getSliderInstance');
    expect(instance).toBeInstanceOf(Slider);
  });

  test('correct get parent', () => {
    const sliderParent = $(root).slider('getParent');
    expect(sliderParent).toBeInstanceOf(HTMLBodyElement);
  });

  test('expect change isRange to true after updateParams call', () => {
    $(root).slider('updateParams', { isRange: true });

    const params = $(root).slider('getParams') as SliderParams;

    expect(params.isRange).toEqual(true);
  });

  test('expect unsubscribe call', () => {
    const mockUnsubscribe = jest.fn();
    const instance = $(root).slider('getSliderInstance') as Slider;

    instance.unsubscribe = mockUnsubscribe;

    $(root).slider('unsubscribe');

    expect(instance.unsubscribe).toBeCalled();
  });

  test('expect subscribe call', () => {
    const mockSubscribe = jest.fn();
    const instance = $(root).slider('getSliderInstance') as Slider;

    instance.subscribe = mockSubscribe;

    $(root).slider('subscribe');

    expect(instance.subscribe).toBeCalled();
  });

  const root2 = '.slider-2';
  $(root2).slider();

  test('expect set data attributes after initialization slider', () => {
    const params = $(root2).slider('getParams') as SliderParams;

    expect(params.min).toEqual(0);
    expect(params.max).toEqual(200);
    expect(params.value[0]).toEqual(10);
  });

  test('expect creation inline slider without initialization', () => {
    document.dispatchEvent(
      new Event('DOMContentLoaded', {
        cancelable: true,
        bubbles: true,
      }),
    );

    const checkCreationCall = () => {
      const mockCreateInlineSliders = jest.fn(createInlineSliders);
      expect(mockCreateInlineSliders).toBeCalled();
    };

    document.addEventListener('DOMContentLoaded', checkCreationCall);
  });
});
