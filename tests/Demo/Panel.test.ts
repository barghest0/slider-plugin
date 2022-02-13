import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import validateParams from '../../src/Presenter/PresenterModules/validateParams/validateParams';
import '@testing-library/jest-dom';

describe('Panel test', () => {
	document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
	const root = '.slider-1';
	const previewSlider = new PreviewSlider(root, {});
	const panel = new Panel(validateParams({}, previewSlider.DOMroot), root, previewSlider);

	test('constructor test', () => {
		expect(panel.parent).toBeInstanceOf(PreviewSlider);
	});

	test('create panel test', () => {
		const input = <HTMLInputElement>document.querySelector('.first-value');
		const inputParent = <HTMLElement>input.parentElement;
		expect(input).toBeInTheDocument();
		expect(input.type).toBe('number');
		expect(inputParent.classList.contains('custom-input')).toBeTruthy();

		const checkbox = <HTMLInputElement>document.querySelector('.is-range');
		const checkboxParent = <HTMLElement>checkbox.parentElement;
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.type).toBe('checkbox');
		expect(checkboxParent.classList.contains('checkbox-label')).toBeTruthy();
	});
});
