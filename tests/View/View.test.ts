import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import View from '../../src/View/View';
import { Directions, Params } from '../../src/utils/interfaces';
import { DEFAULT_SLIDER_PARAMS } from '../../src/utils/constants';

describe('View test', () => {
	document.body.innerHTML = `<div id="slider-1" data-testid="slider-1" class="slider-1"></div>`;
	const rootClass = '.slider-1';
	const root = <HTMLElement>document.querySelector(rootClass);
	const view = new View(root);
	test('constructor test', () => {
		expect(view.DOMroot).toBeInstanceOf(HTMLElement);
	});
	test('setParams test', () => {
		view.setParams(DEFAULT_SLIDER_PARAMS);
		expect(view).toHaveProperty(Params.direction, Directions.horizontal);
	});

	test('correct calculate cursor coordinate test', () => {
		$(root).position().left = 0;
		expect(
			view.calculateCursorOffset(200, Directions.horizontal, root, 200),
		).toBe(100);

		$(root).position().top = 0;
		expect(
			view.calculateCursorOffset(200, Directions.vertical, root, 200),
		).toBe(100);
	});
});
