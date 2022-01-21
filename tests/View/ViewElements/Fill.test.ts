import View from "../../../src/View/View";
import Fill from "../../../src/View/ViewElements/Fill/Fill";

describe("Fill test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
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
});
