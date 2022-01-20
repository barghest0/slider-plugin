import View from "../../src/View/View";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("View test", () => {
	const view = new View(".slider-1");
	test("constructor test", () => {
		expect(view.root).toBe(".slider-1");
	});
});
