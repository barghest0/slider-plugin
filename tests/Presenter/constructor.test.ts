import Slider from "../../src/Slider";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("Presenter test", () => {
	const slider = new Slider(".slider-1", {});
	test("constructor test", () => {
		expect(slider.presenter).toHaveProperty("thumbStance");
		expect(slider.presenter).toHaveProperty("thumbs");
		expect(slider.presenter).toHaveProperty("trackModel");
		expect(slider.presenter).toHaveProperty("view");
		expect(slider.presenter).toHaveProperty("view.direction", "horizontal");
	});
});
