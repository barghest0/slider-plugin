import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import Slider from '../../src/Slider';
import '@testing-library/jest-dom';
import handleChange from '../../src/Demo/Panel/PanelModules/handleChange';



describe('PreviewSlider test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
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

    panel.createPanel();
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
    const event = new Event('input');
    panel.createPanel();

    previewSlider.panel.firstValueInput!.dispatchEvent(event);
    previewSlider.panel.firstValueInput!.value = '50';

    handleChange.call(panel, event, 'value', 0);
    expect(previewSlider.params.value[0]).toBe(50);

    previewSlider.panel.maxValueInput!.dispatchEvent(event);
    previewSlider.panel.maxValueInput!.value = '200';
    handleChange.call(panel, event, 'max');
    expect(previewSlider.params.max).toBe(200);

    previewSlider.panel.minValueInput!.dispatchEvent(event);
    previewSlider.panel.minValueInput!.value = '200';
    handleChange.call(panel, event, 'min');
    expect(previewSlider.params.min).toBe(200);


    previewSlider.panel.isVertical!.dispatchEvent(event);
    previewSlider.panel.isVertical!.checked = true;
    handleChange.call(panel, event, 'direction');
    expect(previewSlider.params.direction).toBe('vertical');

    previewSlider.panel.hasFill!.dispatchEvent(event);
    previewSlider.panel.hasFill!.checked = true;
    handleChange.call(panel, event, 'hasFill');
    expect(previewSlider.params.hasFill).toBe(true);

  });
});
