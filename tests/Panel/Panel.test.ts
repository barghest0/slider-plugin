import { FIRST_VALUE } from '../../src/constants/slider';
import Panel from '../../src/Demo/Panel/Panel';
import handleDirectionChange from '../../src/Demo/Panel/PanelModules/handleDirectionChange';
import handleOtherParamChange from '../../src/Demo/Panel/PanelModules/handleOtherParamChange';
import handleValueChange from '../../src/Demo/Panel/PanelModules/handleValueChange';

import Slider from '../../src/Slider';
import { Directions, Params, SubscribersNames } from '../../src/types/slider';

describe('Panel test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const root = '.slider-1';
  const slider = new Slider(root, {});
  const panel = new Panel(root, slider);
  const subscriberFn = jest.fn();
  panel.init();
  panel.subscribe(SubscribersNames.updateParams, subscriberFn);
  panel.subscribe(SubscribersNames.updateParams, subscriberFn);

  test('constructor test', () => {
    expect(panel.slider).toBeInstanceOf(Slider);
  });

  test('create panel test', () => {
    const input = <HTMLInputElement>document.querySelector('.first-value');
    const inputParent = <HTMLElement>input.parentElement;
    expect(input.type).toBe('number');
    expect(inputParent.classList.contains('custom')).toBeTruthy();

    const checkbox = <HTMLInputElement>document.querySelector('.is-range');
    const checkboxParent = <HTMLElement>checkbox.parentElement;
    expect(checkbox.type).toBe('checkbox');
    expect(checkboxParent.classList.contains('checkbox-label')).toBeTruthy();
  });

  test('init test', () => {
    expect(panel.firstValueInput.value).toBe('0');
    expect(panel.firstValueInput).toBeInstanceOf(HTMLInputElement);

    panel.init();
    panel.slider.params.isRange = true;
  });

  const event = new Event('input');

  test('expect change first thumb value to 50 after dispatch event', () => {
    panel.firstValueInput.dispatchEvent(event);
    panel.firstValueInput.value = '50';
    handleValueChange.call(panel, event, FIRST_VALUE);
    expect(panel.slider.params.value[FIRST_VALUE]).toBe(50);
  });

  test('expect change direction to vertical after dispatch event', () => {
    panel.isVertical.dispatchEvent(event);
    panel.isVertical.checked = true;
    handleDirectionChange.call(panel, event);
    expect(panel.slider.params.direction).toBe(Directions.vertical);
  });

  test('expect change direction to vertical after dispatch event', () => {
    panel.isVertical.dispatchEvent(event);
    panel.isVertical.checked = false;
    handleDirectionChange.call(panel, event);
    expect(panel.slider.params.direction).toBe(Directions.horizontal);
  });

  test('expect change min value to 50 after dispatch event', () => {
    panel.minValueInput.dispatchEvent(event);
    panel.minValueInput.value = '50';
    handleOtherParamChange.call(panel, event, Params.min);
    expect(panel.slider.params.min).toBe(50);
  });

  test('expect change max value to 100 after dispatch event', () => {
    panel.maxValueInput.dispatchEvent(event);
    panel.maxValueInput.value = '100';
    handleOtherParamChange.call(panel, event, Params.max);
    expect(panel.slider.params.max).toBe(100);
  });

  test('expect change hasFill to false after dispatch event', () => {
    panel.hasFill.dispatchEvent(event);
    panel.hasFill.checked = false;
    handleOtherParamChange.call(panel, event, Params.hasFill);
    expect(panel.slider.params.hasFill).toBe(false);
  });
});
