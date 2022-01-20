import Slider from "../../src/Slider";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("Presenter test", () => {
	const slider = new Slider(".slider-1", {});
	test("constructor test", () => {
		expect(slider).toHaveProperty("thumbStance");
		expect(slider).toHaveProperty("thumbs");
		expect(slider).toHaveProperty("trackModel");
		//expect(slider).toHaveProperty("view.direction", "horizontal");
	});
});
