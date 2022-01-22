import { waitFor } from '@testing-library/dom';
import {
	SliderParams,
} from "../../src/Interfaces/interfaces";
import Presenter from '../../src/Presenter/Presenter';
import checkParams from "../../src/Presenter/PresenterModules/checkParams";
import Slider from "../../src/Slider";


describe("Presenter test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const params: SliderParams = checkParams({
		isRange: false,
		direction: "vertical",
		value: 10,
	});
	const presenter = new Presenter(root, params);
	presenter.init(params, 'init');
	test("constructor test", () => {
		expect(presenter).toHaveProperty("view");
	});

	test("correct set model param", () => {
		presenter["setTrackModelState"](params);
		expect(presenter["trackModel"].isRange).toBe(false);
	});

	test("correct set view param", () => {
		presenter["setViewState"]();
		expect(presenter["view"].isRange).toBe(false);
	});

	test("correct set class test", () => {
		expect($(presenter.root).hasClass("slider_vertical")).toBe(true);
	});

	test("correct set thumb view test", () => {
		expect(presenter["view"].thumbView.value[0]).toBe(10);
	});

	test("correct update thumb model", async () => {
		waitFor(() => {
			presenter.view.thumbView.notify("UpdateThumbModel", 0, 80, 'horizontal');
			expect(presenter.thumbs[0].getOffset()).toBe(80);
		});
	});
	test("correct update thumb view", async () => {
		waitFor(() => {
			presenter.thumbs[0].notify("UpdateThumbView", 100, 50, 0);
			presenter.thumbs[1].notify("UpdateThumbView", 150, 70, 1);
			expect(presenter.view.thumbView.value[0]).toBe(100);
			expect(presenter.view.thumbView.value[1]).toBe(150);
			expect(presenter.view.thumbView.offset[0]).toBe(50);
			expect(presenter.view.thumbView.offset[1]).toBe(70);

		});
	});
});
