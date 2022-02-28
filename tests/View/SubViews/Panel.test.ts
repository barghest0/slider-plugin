import { FIRST_VALUE } from '../../../src/constants/slider';
import { Directions, Params, SubscribersNames } from '../../../src/types/slider';
import Panel from '../../../src/View/SubViews/Panel/Panel';
import handleDirectionChange from '../../../src/View/SubViews/Panel/utils/handleDirectionChange';
import handleOtherParamChange from '../../../src/View/SubViews/Panel/utils/handleOtherParamChange';
import handleValueChange from '../../../src/View/SubViews/Panel/utils/handleValueChange';
import View from '../../../src/View/View';

describe('Panel test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const root = '#slider-1';
  const DOMroot = <HTMLElement>document.querySelector(root);
  const DOMparent = <HTMLElement>DOMroot.parentElement;
  const view = new View(DOMroot);
  const panel = new Panel(view);
  const subscriberFn = jest.fn();
  panel.createPanel(DOMparent);
  panel.subscribe(SubscribersNames.updateParams, subscriberFn);
  panel.subscribe(SubscribersNames.updateParams, subscriberFn);

  test('constructor test', () => {
    expect(panel.view).toBeInstanceOf(View);
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

    panel.createPanel(DOMparent);
    panel.view.getParams().isRange = true;
  });

  const event = new Event('input');

  test('expect change first thumb value to 50 after dispatch event', () => {
    panel.firstValueInput.dispatchEvent(event);
    panel.firstValueInput.value = '50';
    handleValueChange.call(panel, event, FIRST_VALUE);
    expect(panel.view.getParams().value[FIRST_VALUE]).toBe(50);
  });

  test('expect change direction to vertical after dispatch event', () => {
    panel.isVertical.dispatchEvent(event);
    panel.isVertical.checked = true;
    handleDirectionChange.call(panel, event);
    expect(panel.view.getParams().direction).toBe(Directions.vertical);
  });

  test('expect change direction to vertical after dispatch event', () => {
    panel.isVertical.dispatchEvent(event);
    panel.isVertical.checked = false;
    handleDirectionChange.call(panel, event);
    expect(panel.view.getParams().direction).toBe(Directions.horizontal);
  });

  test('expect change min value to 50 after dispatch event', () => {
    panel.minValueInput.dispatchEvent(event);
    panel.minValueInput.value = '50';
    handleOtherParamChange.call(panel, event, Params.min);
    expect(panel.view.getParams().min).toBe(50);
  });

  test('expect change max value to 100 after dispatch event', () => {
    panel.maxValueInput.dispatchEvent(event);
    panel.maxValueInput.value = '100';
    handleOtherParamChange.call(panel, event, Params.max);
    expect(panel.view.getParams().max).toBe(100);
  });

  test('expect change hasFill to false after dispatch event', () => {
    panel.hasFill.dispatchEvent(event);
    panel.hasFill.checked = false;
    handleOtherParamChange.call(panel, event, Params.hasFill);
    expect(panel.view.getParams().hasFill).toBe(false);
  });

  // test('expect initialize only first value input if isRange equal false', () => {
  //   view.setParams();
  //   panel.createPanel(DOMparent);
  //   expect(panel.firstValueInput.value).toBe('10');
  //   expect(panel.secondValueInput.value).toBe('');
  //   expect(panel.secondValueInput.disabled).toBeTruthy();
  // });

  // test('expect initialize both value inputs if isRange equal true', () => {
  //   view.setParams();
  //   panel.createPanel(DOMparent);
  //   expect(panel.firstValueInput.value).toBe('10');
  //   expect(panel.secondValueInput.value).toBe('20');
  // });
});
