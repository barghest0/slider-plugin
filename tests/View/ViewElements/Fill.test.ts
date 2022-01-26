import View from "../../../src/View/View";
import Fill from "../../../src/View/ViewElements/Fill/Fill";
import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom'

describe("Fill test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const thumb = view.thumbView;
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

	test("correct updateFill with single thumb test",  () => {
		fill.setSize(50)
		fill.updateFill('horizontal');
		const DOMFill = screen.getByTestId('test-fill');
		expect(DOMFill).toHaveStyle('width:50%');
			
	});

	test("correct updateFill with range test",  () => {
		view.isRange = true;
		fill.setOffset(50)
		fill.setSize(100);
		fill.updateFill('horizontal');
		const DOMFill = screen.getByTestId('test-fill');
		expect(DOMFill).toHaveStyle('width:50%');
		expect(DOMFill).toHaveStyle('left:50%');
	});


	test("correct initial fill placement test",  () => {
		
		fill.setSize(10);
		fill.setOffset(10);
		view.initialFillPlacement('horizontal');
		const DOMFill1 = screen.getByTestId('test-fill');
		expect(DOMFill1).toHaveStyle('width:10%');
		expect(DOMFill1).toHaveStyle('left:10%')


		fill.setOffset(50);
		fill.setSize(50);
		view.initialFillPlacement('vertical');
		const DOMFill2 = screen.getByTestId('test-fill');
		expect(DOMFill2).toHaveStyle('height:50%');
		expect(DOMFill2).toHaveStyle('top:50%');
	});

});
