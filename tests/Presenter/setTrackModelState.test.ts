import {
	SliderParams,
	UserSliderParams,
} from "../../src/Interfaces/interfaces";
import Slider from "../../src/Slider";
import checkParams from "../../src/Presenter/PresenterModules/checkParams";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("Presenter test", () => {
	const args: SliderParams = checkParams({
		isRange: false,
	});
	const slider = new Slider(".slider-1", args);

	test("correct set isRange model param", () => {
		slider.presenter["setTrackModelState"](args);
		expect(slider.presenter["trackModel"].isRange).toBe(false);
	});
});
