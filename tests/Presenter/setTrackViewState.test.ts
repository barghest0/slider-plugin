import { SliderParams } from "../../src/Interfaces/interfaces";
import Slider from "../../src/Slider";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("if track view state correct", () => {
	const args: SliderParams = {
		min: -2,
		max: 2,
		step: 0.4,
		value: [-1, 1],
		isRange: false,
		direction: "horizontal",
		hasFill: true,
		hasTips: true,
		hasScale: true,
		isDecimal: true,
		decimalPlaces: 1,
	};
	const slider = new Slider(".slider-1", args);
	test("correct set isRange view param", () => {
		slider.presenter["setTrackModelState"](args);
		expect(slider.presenter["view"].isRange).toBe(false);
	});
});
