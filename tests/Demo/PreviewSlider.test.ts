import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import validateParams from '../../src/Presenter/PresenterModules/validateParams/validateParams';
import Slider from '../../src/Slider';
import '@testing-library/jest-dom';
import handleChange from '../../src/Demo/Panel/PanelModules/handleChange';
import { FIRST_VALUE } from '../../src/utils/constants';
import { Directions, InitMods, Params } from '../../src/utils/interfaces';

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

  test('correct handle change', () => {
    const event = new Event('input');
    panel.renderPanel();

    previewSlider.panel.firstValueInput.dispatchEvent(event);
    previewSlider.panel.firstValueInput.value = '50';

    handleChange.call(panel, event, Params.value, FIRST_VALUE);
    expect(previewSlider.params.value[FIRST_VALUE]).toBe(50);

    previewSlider.panel.maxValueInput.dispatchEvent(event);
    previewSlider.panel.maxValueInput.value = '200';
    handleChange.call(panel, event, Params.max);
    expect(previewSlider.params.max).toBe(200);

    previewSlider.panel.minValueInput.dispatchEvent(event);
    previewSlider.panel.minValueInput.value = '-100';
    handleChange.call(panel, event, Params.min);
    expect(previewSlider.params.min).toBe(-100);

    previewSlider.panel.isVertical.dispatchEvent(event);
    previewSlider.panel.isVertical.checked = true;
    handleChange.call(panel, event, Params.direction);
    expect(previewSlider.params.direction).toBe(Directions.vertical);

    previewSlider.panel.hasFill.dispatchEvent(event);
    previewSlider.panel.hasFill.checked = true;
    handleChange.call(panel, event, Params.hasFill);
    expect(previewSlider.params.hasFill).toBe(true);
  });
});
