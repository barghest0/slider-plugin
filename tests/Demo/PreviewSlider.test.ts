import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import Slider from '../../src/Slider';
import '@testing-library/jest-dom';
import handleChange from '../../src/Demo/Panel/PanelModules/handleChange';
import { FIRST_VALUE } from '../../src/utils/constants';

describe('PreviewSlider test', () => {
	document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
	const root = '.slider-1';

	const previewSlider = new PreviewSlider(root, {});
	const panel = new Panel(checkParams({}, previewSlider.DOMroot), root, previewSlider);
	test('constructor test', () => {
		expect(previewSlider.panel).toBeInstanceOf(Panel);
		expect(previewSlider.slider).toBeInstanceOf(Slider);
	});

	test('init test', () => {
		expect(previewSlider.panel.firstValueInput.value).toBe('0');
		expect(previewSlider.panel.firstValueInput).toBeInstanceOf(HTMLInputElement);

		panel.renderPanel();
		previewSlider.init(checkParams({ isRange: true }, previewSlider.DOMroot), 'rebuild');
		previewSlider.slider.params.isRange = true;
	});

	test('correct handle change', () => {
		const event = new Event('input');
		panel.renderPanel();

		previewSlider.panel.firstValueInput.dispatchEvent(event);
		previewSlider.panel.firstValueInput.value = '50';

		handleChange.call(panel, event, 'value', FIRST_VALUE);
		expect(previewSlider.params.value[FIRST_VALUE]).toBe(50);

		previewSlider.panel.maxValueInput.dispatchEvent(event);
		previewSlider.panel.maxValueInput.value = '200';
		handleChange.call(panel, event, 'max');
		expect(previewSlider.params.max).toBe(200);

		previewSlider.panel.minValueInput.dispatchEvent(event);
		previewSlider.panel.minValueInput.value = '200';
		handleChange.call(panel, event, 'min');
		expect(previewSlider.params.min).toBe(190);

		previewSlider.panel.isVertical.dispatchEvent(event);
		previewSlider.panel.isVertical.checked = true;
		handleChange.call(panel, event, 'direction');
		expect(previewSlider.params.direction).toBe('vertical');

		previewSlider.panel.hasFill.dispatchEvent(event);
		previewSlider.panel.hasFill.checked = true;
		handleChange.call(panel, event, 'hasFill');
		expect(previewSlider.params.hasFill).toBe(true);
	});
});
