import { waitFor } from '@testing-library/dom';
import View from "../../src/View/View";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("View test", () => {
	const root = '.slider-1';
	const view = new View(root);
	test("constructor test", () => {
		expect(view.root).toBe(root);
	});
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

	test("setFillState test", () => {
		view.setFillState({
			fillSize: 50,
			fillOffset: 50,
		});
		expect(view.fillView).toHaveProperty("size", 50);
	});

	test("correct calculate cursor coordinate test", async () => {

		$(root).position().left = 0;
		expect(view.calculateCursorCoordinate(200, 'horizontal', root, 200)).toBe(100);

		$(root).position().top = 0;
		expect(view.calculateCursorCoordinate(200, 'vertical', root, 200)).toBe(100);

	});

});
