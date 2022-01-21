import ThumbModel from "../../../src/Model/ThumbModel";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("ThumbModel test", () => {
	const thumb = new ThumbModel(".slider-1", 0);
	test("correct step test", () => {
		thumb.setStep(10, { min: 0, max: 100 });
		expect(thumb).toHaveProperty("step", 10);
		expect(thumb).toHaveProperty("stepCount", 10);
		expect(thumb).toHaveProperty("stepPercent", 10);
	});
});
