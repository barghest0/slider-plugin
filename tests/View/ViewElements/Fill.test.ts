import View from "../../../src/View/View";
import Fill from "../../../src/View/ViewElements/Fill/Fill";
import updateFill from "../../../src/View/ViewElements/Fill/utils/updateFill";
import {screen, waitFor} from '@testing-library/dom'
describe("Fill test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const thumb = view.thumbView
	const fill = new Fill(view);
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

	test("correct updateFill with single thumb test", async () => {
		fill.createFill('horizontal',true)
		thumb.setOffset(50,0)
		updateFill.call(fill,'horizontal')
		waitFor(()=>{
			const DOMFill = screen.getByTestId('test-fill')
			expect(DOMFill).toHaveStyle('width:50%')
		})
	});
	test("correct updateFill with range  test", async () => {
		fill.createFill('horizontal',true)
		view.isRange = true
		thumb.setOffset(50,0)
		thumb.setOffset(100,1)
		updateFill.call(fill,'horizontal')
		waitFor(()=>{
			const DOMFill = screen.getByTestId('test-fill')
			expect(DOMFill).toHaveStyle('width:50%')
		})
	});
	
});
