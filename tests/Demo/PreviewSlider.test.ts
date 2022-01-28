import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import Slider from '../../src/Slider';
import '@testing-library/jest-dom';
import handleChange from '../../src/Demo/Panel/PanelModules/handleChange';
import DOMPanel from './DOMPanel';

beforeEach(() => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
});

describe('PreviewSlider test', () => {
  document.body.innerHTML = DOMPanel;
  const root = '.slider-1';
  const previewSlider = new PreviewSlider(root, {});
  const panel = new Panel(checkParams({}), root, previewSlider);
  test('constructor test', () => {
    expect(previewSlider.panel).toBeInstanceOf(Panel);
    expect(previewSlider.slider).toBeInstanceOf(Slider);
  });

  test('init test', () => {
    expect(previewSlider.panel.firstValueInput!.value).toBe('0');
    expect(previewSlider.panel.firstValueInput).toBeInstanceOf(HTMLInputElement);
    document.body.innerHTML = DOMPanel;
    previewSlider.init(checkParams({ isRange: true }), 'rebuild');
    previewSlider.slider.params.isRange = true;
  });

  test('correct update panel values', () => {
    previewSlider.updatePanelValues(100, 0);
    expect(previewSlider.panel.firstValueInput!.value).toBe('100');
    previewSlider.updatePanelValues(200, 1);
    expect(previewSlider.panel.secondValueInput!.value).toBe('200');
  });

  test('correct handle change', () => {
    const event = new Event('change');
        previewSlider.panel.firstValueInput!.dispatchEvent(event);
        previewSlider.panel.firstValueInput!.value = '100';
        document.body.innerHTML = DOMPanel;
        handleChange.call(panel, event, 'value', 0);
        previewSlider.params.value[0] = 100;
  });
});
