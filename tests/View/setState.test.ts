import View from "../../src/View/View";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("View test", () => {
	const view = new View(".slider-1");
	test("setState test", () => {
		view.setState({
			direction: "vertical",
			ends: { min: -100, max: 100 },
			size: 100,
			hasFill: true,
			hasTips: true,
			hasScale: true,
			isRange: false,
		});
		expect(view).toHaveProperty("direction", "vertical");
	});
});
