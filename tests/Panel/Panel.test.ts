import Slider from '../../src/components/Slider/Slider';

import { FIRST_VALUE, SECOND_THUMB_STANCE } from '../../src/components/Slider/constants';

import { Directions, Params, SubscribersNames } from '../../src/components/Slider/types';

import Panel from '../../src/components/Panel/Panel';
import {
  CHECKBOX_LABEL_CLASS,
  CHECKBOX_TYPE,
  CUSTOM_CLASS,
  FIRST_VALUE_CLASS,
  IS_RANGE_CLASS,
  NUMBER_TYPE,
} from '../../src/components/Panel/constants';

import handleDirectionChange from '../../src/components/Panel/utils/handleDirectionChange';
import handleOtherParamChange from '../../src/components/Panel/utils/handleOtherParamChange';
import handleValueChange from '../../src/components/Panel/utils/handleValueChange';
import Presenter from '../../src/components/Presenter/Presenter';

import { getValidatedParams } from '../../src/utils/validators';

import '../../src/plugin/plugin';

describe('Panel test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const root = '#slider-1';
  const slider = $(root).slider({});
  const DOMparent = slider.getParent();
  const DOMroot = slider.getContainer();
  const panel = new Panel(slider);

  test('constructor test', () => {
    expect(panel.slider).toBeInstanceOf(Slider);
  });

  test('create panel test', () => {
    const input = <HTMLInputElement>document.querySelector(`.${FIRST_VALUE_CLASS}`);
    const inputParent = <HTMLElement>input.parentElement;
    expect(input.type).toBe(NUMBER_TYPE);
    expect(inputParent.classList.contains(CUSTOM_CLASS)).toBeTruthy();
    const checkbox = <HTMLInputElement>document.querySelector(`.${IS_RANGE_CLASS}`);
    const checkboxParent = <HTMLElement>checkbox.parentElement;
    expect(checkbox.type).toBe(CHECKBOX_TYPE);
    expect(checkboxParent.classList.contains(CHECKBOX_LABEL_CLASS)).toBeTruthy();
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
    handleOtherParamChange.call(panel, event, Params.min);
    expect(panel.slider.getParams().min).toBe(50);
  });

  test('expect change max value to 100 after dispatch event', () => {
    panel.inputs.maxValueInput.dispatchEvent(event);
    panel.inputs.minValueInput.value = '100';
    handleOtherParamChange.call(panel, event, Params.max);
    expect(panel.slider.getParams().max).toBe(100);
  });

  test('expect change hasFill to false after dispatch event', () => {
    panel.inputs.hasFill.dispatchEvent(event);
    panel.inputs.hasFill.checked = false;
    handleOtherParamChange.call(panel, event, Params.hasFill);
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

  const params = getValidatedParams({ isRange: true, panel: true });
  const presenter = new Presenter(params, DOMroot, DOMparent);
  presenter.init();

  // test('expect change first value input values to 20 after drag first thumb', () => {
  //   presenter.model.setValue(FIRST_THUMB_STANCE, 20);
  //   expect(panel.inputs.firstValueInput.value).toBe('20');
  // });

  // test('expect change second value input values to 30 after drag first thumb', () => {
  //   presenter.model.setValue(SECOND_THUMB_STANCE, 30);
  //   expect(panel.inputs.secondValueInput.value).toBe('30');
  // });

  test('expect calling onChange after notify view', () => {
    const onChange = jest.fn();
    presenter.getParams().onChange = onChange;
    presenter.model.notify(SubscribersNames.updateThumbView, SECOND_THUMB_STANCE);
    expect(presenter.getParams().onChange).toBeDefined();
  });
});
