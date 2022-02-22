import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from '../src/constants/slider';
import Panel from '../src/Demo/Panel/Panel';
import handleValueChange from '../src/Demo/Panel/PanelModules/handleValueChange';
import validateParams from '../src/Model/ModelModules/validateParams';
import Slider from '../src/Slider';
import { SubscribersNames } from '../src/types/slider';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;

  const slider = new Slider('.slider-1', { isRange: true });
  slider.addControlPanel();
  const panel = slider.panel as Panel;

  test('correct set/get params ', () => {
    slider.setParams(DEFAULT_SLIDER_PARAMS);
    expect(slider.getParams()).toEqual(DEFAULT_SLIDER_PARAMS);
  });
  test('correct add panel to properties', () => {
    slider.addControlPanel();
    expect(panel).toBeDefined();
  });

  test('expect change first value input values to 20 before drag first thumb', () => {
    slider.presenter.model.setValue(FIRST_THUMB_STANCE, 20);
    slider.presenter.model.notify(SubscribersNames.updateThumbView, FIRST_THUMB_STANCE);
    expect(panel.firstValueInput.value).toBe('20');
  });

  test('expect change second value input values to 30 before drag first thumb', () => {
    slider.presenter.model.setValue(SECOND_THUMB_STANCE, 30);

    slider.presenter.model.notify(SubscribersNames.updateThumbView, SECOND_THUMB_STANCE);
    expect(panel.secondValueInput.value).toBe('30');
  });

  test('expect calling onChange after notify view', () => {
    const onChange = jest.fn();
    slider.getParams().onChange = onChange;
    slider.presenter.model.notify(SubscribersNames.updateThumbView, SECOND_THUMB_STANCE);
    expect(slider.getParams().onChange).toBeDefined();
  });

  test('expect calling init and unsubscribe before change params', () => {
    const unsubscribe = jest.fn();
    const event = new Event('input');
    slider.unsubscribe = unsubscribe;
    panel.firstValueInput.dispatchEvent(event);
    panel.firstValueInput.value = '50';

    handleValueChange.call(panel, event, FIRST_THUMB_STANCE);
    expect(slider.unsubscribe).toBeCalled();
  });
});
