import panelTemplate from './constants';

import Slider from 'components/Slider/Slider';
import {
  FIRST_VALUE,
  DEFAULT_SLIDER_PARAMS,
} from 'components/Slider/constants';
import { Directions, Params } from 'components/Slider/types';
import Panel from 'demo/Panel/Panel';
import {
  CHECKBOX_PARENT_CLASS,
  CHECKBOX_TYPE,
  FIRST_VALUE_SELECTOR,
  IS_RANGE_SELECTOR,
  NUMBER_TYPE,
} from 'demo/Panel/constants';
import handleDirectionChange from 'demo/Panel/utils/handleDirectionChange';
import handleCommonParamChange from 'demo/Panel/utils/handleCommonParamChange';
import handleValueChange from 'demo/Panel/utils/handleValueChange';
import { getValidatedParams } from 'utils/validators';
import 'plugin/plugin';

describe('Panel test', () => {
  document.body.innerHTML = panelTemplate;
  const root = '.slider-1';
  const slider = $(root).slider({});
  const panel = new Panel(slider);

  beforeEach(() => {
    panel.updatePanelParams(DEFAULT_SLIDER_PARAMS);
  });

  test('constructor test', () => {
    expect(panel.slider).toBeInstanceOf(Slider);
  });

  test('create panel test', () => {
    const input = <HTMLInputElement>(
      document.querySelector(FIRST_VALUE_SELECTOR)
    );

    expect(input.type).toBe(NUMBER_TYPE);

    const checkbox = <HTMLInputElement>(
      document.querySelector(IS_RANGE_SELECTOR)
    );
    const checkboxParent = <HTMLElement>checkbox.parentElement;

    expect(checkbox.type).toBe(CHECKBOX_TYPE);
    expect(checkboxParent.classList).toContain(CHECKBOX_PARENT_CLASS);
  });

  test('init test', () => {
    expect(panel.inputs.firstValueInput.value).toBe('0');
    expect(panel.inputs.firstValueInput).toBeInstanceOf(HTMLInputElement);
  });

  const event = new Event('input');

  test('expect change first thumb value to 50 after dispatch event', () => {
    panel.inputs.firstValueInput.dispatchEvent(event);
    panel.inputs.firstValueInput.value = '50';
    handleValueChange.call(panel, event, FIRST_VALUE);

    expect(panel.slider.getParams().value[FIRST_VALUE]).toBe(50);
  });

  test('expect change direction to vertical after dispatch event', () => {
    panel.inputs.isVertical.dispatchEvent(event);
    panel.inputs.isVertical.checked = true;
    handleDirectionChange.call(panel, event);

    expect(panel.slider.getParams().direction).toBe(Directions.vertical);
  });

  test('expect change direction to vertical after dispatch event', () => {
    panel.inputs.isVertical.dispatchEvent(event);
    panel.inputs.isVertical.checked = false;
    handleDirectionChange.call(panel, event);

    expect(panel.slider.getParams().direction).toBe(Directions.horizontal);
  });

  test('expect change min value to 50 after dispatch event', () => {
    panel.inputs.minValueInput.dispatchEvent(event);
    panel.inputs.minValueInput.value = '50';
    handleCommonParamChange.call(panel, event, Params.min);

    expect(panel.slider.getParams().min).toBe(50);
  });

  test('expect change max value to 100 after dispatch event', () => {
    panel.inputs.maxValueInput.dispatchEvent(event);
    panel.inputs.minValueInput.value = '100';
    handleCommonParamChange.call(panel, event, Params.max);

    expect(panel.slider.getParams().max).toBe(100);
  });

  test('expect change hasFill to false after dispatch event', () => {
    panel.inputs.hasFill.dispatchEvent(event);
    panel.inputs.hasFill.checked = false;
    handleCommonParamChange.call(panel, event, Params.hasFill);

    expect(panel.slider.getParams().hasFill).toBe(false);
  });

  test('expect initialize only first value input if isRange equal false', () => {
    slider.updateParams({ isRange: false, value: [10] });
    panel.updatePanelParams(slider.getParams());

    expect(panel.inputs.firstValueInput.value).toBe('10');
    expect(panel.inputs.secondValueInput.value).toBe('');
    expect(panel.inputs.secondValueInput.disabled).toBeTruthy();
  });
  test('expect initialize both value inputs if isRange equal true', () => {
    slider.updateParams({ isRange: true, value: [10, 20] });
    panel.updatePanelParams(slider.getParams());

    expect(panel.inputs.firstValueInput.value).toBe('10');
    expect(panel.inputs.secondValueInput.value).toBe('20');
  });

  test('expect set first value input to 30', () => {
    const params = getValidatedParams({ value: [30] });
    panel.updatePanelValue(params);

    expect(panel.inputs.firstValueInput.value).toBe('30');
  });

  test('expect set second value input to 40', () => {
    const params = getValidatedParams({ value: [10, 40] });
    panel.updatePanelValue(params);

    expect(panel.inputs.secondValueInput.value).toBe('40');
  });
});
