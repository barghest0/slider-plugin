import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import validateParams from '../../src/Presenter/PresenterModules/validateParams/validateParams';
import Slider from '../../src/Slider';
import handleChange from '../../src/Demo/Panel/PanelModules/handleOtherParamChange';
import { FIRST_VALUE } from '../../src/utils/constants';
import { Directions, InitMods, Params } from '../../src/utils/interfaces';
import handleValueChange from '../../src/Demo/Panel/PanelModules/handleValueChange';
import handleDirectionChange from '../../src/Demo/Panel/PanelModules/handleDirectionChange';
import handleOtherParamChange from '../../src/Demo/Panel/PanelModules/handleOtherParamChange';

describe('PreviewSlider test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const root = '.slider-1';

  const previewSlider = new PreviewSlider(root, {});
  const panel = new Panel(
    validateParams({}, previewSlider.DOMroot),
    root,
    previewSlider,
  );
  test('constructor test', () => {
    expect(previewSlider.panel).toBeInstanceOf(Panel);
    expect(previewSlider.slider).toBeInstanceOf(Slider);
  });

  test('init test', () => {
    expect(previewSlider.panel.firstValueInput.value).toBe('0');
    expect(previewSlider.panel.firstValueInput).toBeInstanceOf(
      HTMLInputElement,
    );

    panel.renderPanel();
    previewSlider.init(
      validateParams({ isRange: true }, previewSlider.DOMroot),
      InitMods.rebuild,
    );
    previewSlider.slider.params.isRange = true;
  });

  const event = new Event('input');

  test('expect change first thumb value to 50 after dispatch event', () => {
    previewSlider.panel.firstValueInput.dispatchEvent(event);
    previewSlider.panel.firstValueInput.value = '50';
    handleValueChange.call(panel, event, FIRST_VALUE);
    expect(previewSlider.params.value[FIRST_VALUE]).toBe(50);
  });

  test('expect change direction to vertical after dispatch event', () => {
    previewSlider.panel.isVertical.dispatchEvent(event);
    previewSlider.panel.isVertical.checked = true;
    handleDirectionChange.call(panel, event);
    expect(previewSlider.params.direction).toBe(Directions.vertical);
  });

  test('expect change direction to vertical after dispatch event', () => {
    previewSlider.panel.isVertical.dispatchEvent(event);
    previewSlider.panel.isVertical.checked = false;
    handleDirectionChange.call(panel, event);
    expect(previewSlider.params.direction).toBe(Directions.horizontal);
  });

  test('expect change min value to 50 after dispatch event', () => {
    previewSlider.panel.minValueInput.dispatchEvent(event);
    previewSlider.panel.minValueInput.value = '50';
    handleOtherParamChange.call(panel, event, Params.min);
    expect(previewSlider.params.min).toBe(50);
  });

  test('expect change max value to 100 after dispatch event', () => {
    previewSlider.panel.maxValueInput.dispatchEvent(event);
    previewSlider.panel.maxValueInput.value = '100';
    handleOtherParamChange.call(panel, event, Params.max);
    expect(previewSlider.params.max).toBe(100);
  });

  test('expect change hasFill to false after dispatch event', () => {
    previewSlider.panel.hasFill.dispatchEvent(event);
    previewSlider.panel.hasFill.checked = false;
    handleOtherParamChange.call(panel, event, Params.hasFill);
    expect(previewSlider.params.hasFill).toBe(false);
  });
});
