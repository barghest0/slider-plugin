import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';
import { APINames, SubscribeCallback } from 'plugin/types';
import DEFAULT_SLIDER_SELECTOR from 'plugin/constants';
import api from 'services/api';

import { getParamsFromDataset, getValidatedParams } from './validators';

const sliderInstances: Slider[] = [];
let sliderInstanceIndex = 0;

function getSliderInstance(
  params: UserSliderParams | Record<string, never>,
  index: number,
  element: HTMLElement,
) {
  const validatedParams = getValidatedParams(params);
  const paramsFromDataset = getParamsFromDataset($(element), validatedParams);

  element.dataset.sliderInstance = index.toString();

  return new Slider(element, paramsFromDataset);
}

function slider<T extends UserSliderParams | APINames | SubscribeCallback>(
  this: JQuery,
  ...args: T[]
) {
  const [method, params] = args;

  const isPassedMethod = method in APINames;

  const isPassedParamsInsteadOfMethod =
    !isPassedMethod || typeof method === 'object';

  if (isPassedMethod) {
    const sliderInstance = sliderInstances[this.data('sliderInstance')];
    return api[method as APINames](sliderInstance, params);
  }

  if (isPassedParamsInsteadOfMethod) {
    return this.each((_, element) => {
      sliderInstances.push(
        getSliderInstance(method || {}, sliderInstanceIndex, element),
      );

      sliderInstanceIndex += 1;
    });
  }

  return null;
}

function createInlineSliders() {
  const sliders = document.querySelectorAll(DEFAULT_SLIDER_SELECTOR);

  sliders.forEach(sliderItem => {
    $(sliderItem).slider();
  });
}

export { createInlineSliders, slider };
