import Slider from 'components/Slider/Slider';
import { UserSliderParams } from 'components/Slider/types';
import { APINames, SubscribeCallback } from 'plugin/types';
import DEFAULT_SLIDER_SELECTOR from 'plugin/constants';

import { getParamsFromDataset, getValidatedParams } from './validators';
import * as APIMethods from './api-methods';

const sliderInstances: Slider[] = [];

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

function slider<T extends APINames | SubscribeCallback | UserSliderParams>(
  this: JQuery,
  ...args: T[]
) {
  const method = args[0];
  const params = args[1];

  const isPassedMethod = method in APINames;

  const isPassedCallback = params instanceof Function;
  const getParams = !isPassedCallback && params;
  const getParamsInsteadOfMethod = !isPassedMethod && method;

  const isAPIMethodExist = APINames[method];

  if (typeof method === 'string') {
    const instanceIndex = this.data('sliderInstance');
    const sliderInstance = sliderInstances[instanceIndex];

    return APIMethods[method](sliderInstance, params);
  }

  if (typeof method === 'object' || !method) {
    return this.each((index, element) => {
      sliderInstances.push(
        getSliderInstance(getParamsInsteadOfMethod || {}, index, element),
      );
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
