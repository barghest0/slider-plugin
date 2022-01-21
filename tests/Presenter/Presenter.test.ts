import {
	SliderParams,
	UserSliderParams,
} from "../../src/Interfaces/interfaces";
import checkParams from "../../src/Presenter/PresenterModules/checkParams";
import Slider from "../../src/Slider";

describe("Presenter test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const params: SliderParams = checkParams({
		isRange: false,
		direction: "vertical",
		value: 0,
	});
	const slider = new Slider(".slider-1", params);

	test("constructor test", () => {
		expect(slider.presenter).toHaveProperty("trackModel");
	});

	test("correct set model param", () => {
		slider.presenter["setTrackModelState"](params);
		expect(slider.presenter["trackModel"].isRange).toBe(false);
	});
	test("correct set view param", () => {
		slider.presenter["setViewState"]();
		expect(slider.presenter["view"].isRange).toBe(false);
	});
	test("correct set class test", () => {
		expect($(slider.presenter.root).hasClass("slider_vertical")).toBe(true);
	});
	test("correct set thumb view test", () => {
		expect(slider.presenter["view"].thumbView.value[0]).toBe(0);
	});
});
