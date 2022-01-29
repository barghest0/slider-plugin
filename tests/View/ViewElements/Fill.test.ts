import View from "../../../src/View/View";
import Fill from "../../../src/View/ViewElements/Fill/Fill";
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe("Fill test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const fill = new Fill(view);

	fill.createFill('horizontal', true);

	test("constructor test", () => {
		expect(view.root).toBe(root);
	});
	test("setSize test", () => {
		fill.setSize(100);
		expect(fill).toHaveProperty("size", 100);
	});

	test("setOffset test", () => {
		fill.setOffset(100);
		expect(fill).toHaveProperty("offset", 100);
	});

	test("correct updateFill with single thumb test", () => {
		fill.setSize(50);
		fill.updateFill('horizontal');
		const DOMFill = screen.getByTestId('test-fill');
		expect(DOMFill).toHaveStyle('width:50%');

	});

	test("correct updateFill with range test", () => {
		view.isRange = true;
		fill.setOffset(20);
		fill.setSize(80);
		fill.updateFill('horizontal');
		const DOMFill = screen.getByTestId('test-fill');
		expect(DOMFill).toHaveStyle('width:80%');
		expect(DOMFill).toHaveStyle('left:20%');
	});



});
