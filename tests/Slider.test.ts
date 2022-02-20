import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from '../src/constants/slider';
import handleValueChange from '../src/Demo/Panel/PanelModules/handleValueChange';
import validateParams from '../src/Presenter/PresenterModules/validateParams';
import Slider from '../src/Slider';
import { SubscribersNames } from '../src/types/slider';

describe('Slider test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;

  const slider = new Slider('.slider-1', { isRange: true });

  test('correct set/get params ', () => {
    slider.setParams(validateParams(DEFAULT_SLIDER_PARAMS, slider.DOMroot));
    expect(slider.getParams()).toEqual(
      validateParams(DEFAULT_SLIDER_PARAMS, slider.DOMroot),
    );
  });
  test('correct add panel to properties', () => {
    slider.addControlPanel();
    expect(slider.panel).toBeDefined();
  });

  test('expect change first value input values to 20 before drag first thumb', () => {
    slider.presenter.model.setValue(FIRST_THUMB_STANCE, 20);
    slider.presenter.model.notify(SubscribersNames.updateThumbView, FIRST_THUMB_STANCE);
    expect(slider.panel.firstValueInput.value).toBe('20');
  });

  test('expect change second value input values to 30 before drag first thumb', () => {
    slider.presenter.model.setValue(SECOND_THUMB_STANCE, 30);

    slider.presenter.model.notify(SubscribersNames.updateThumbView, SECOND_THUMB_STANCE);
    expect(slider.panel.secondValueInput.value).toBe('30');
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
    slider.panel.firstValueInput.dispatchEvent(event);
    slider.panel.firstValueInput.value = '50';

    handleValueChange.call(slider.panel, event, FIRST_THUMB_STANCE);
    expect(slider.unsubscribe).toBeCalled();
  });
});
