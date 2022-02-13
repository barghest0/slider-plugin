import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import View from '../../src/View/View';
import { Directions, Params } from '../../src/utils/interfaces';

describe('View test', () => {
	document.body.innerHTML = `<div id="slider-1" data-testid="slider-1" class="slider-1"></div>`;
	const rootClass = '.slider-1';
	const root = <HTMLElement>document.querySelector(rootClass);
	const view = new View(root);
	test('constructor test', () => {
		expect(view.DOMroot).toBeInstanceOf(HTMLElement);
	});
	test('setState test', () => {
		view.setState({
			direction: Directions.vertical,
			ends: { min: -100, max: 100 },
			size: 100,
			hasFill: true,
			hasTips: true,
			hasScale: true,
			isRange: false,
		});
		expect(view).toHaveProperty(Params.direction, Directions.vertical);
	});

	test('setFillState test', () => {
		view.setFillState({
			fillSize: 50,
			fillOffset: 50,
		});
		expect(view.fillView).toHaveProperty('size', 50);
	});

	test('correct calculate cursor coordinate test', () => {
		$(root).position().left = 0;
		expect(view.calculateCursorCoordinate(200, Directions.horizontal, root, 200)).toBe(100);

		$(root).position().top = 0;
		expect(view.calculateCursorCoordinate(200, Directions.vertical, root, 200)).toBe(100);
	});

	test('correct initial fill placement test', () => {
		view.isRange = true;
		view.fillView.createFill(Directions.horizontal);

		view.fillView.setSize(10);
		view.fillView.setOffset(10);
		view.initialFillPlacement();
		const DOMFillHorizontal = screen.getByTestId('test-fill');
		expect(DOMFillHorizontal).toHaveStyle('width:10%');
		expect(DOMFillHorizontal).toHaveStyle('left:10%');
	});
});
