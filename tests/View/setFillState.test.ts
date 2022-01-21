import View from "../../src/View/View";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("View test", () => {
	const view = new View(".slider-1");
	test("setFillState test", () => {
		view.setFillState({
			fillSize: 50,
			fillOffset: 50,
		});
		expect(view.fillView).toHaveProperty("size", 50);
	});
});
