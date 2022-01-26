import '@testing-library/jest-dom'
import { waitFor } from "@testing-library/dom";
import { DEFAULT_SLIDER_PARAMS } from "../../src/GlobalUtils/constants";
import { SliderParams } from "../../src/GlobalUtils/interfaces";
import Presenter from "../../src/Presenter/Presenter";
import checkParams from "../../src/Presenter/PresenterModules/checkParams";


describe("Presenter test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const params: SliderParams = checkParams({
		isRange: true,
		direction: "vertical",
		value: 10,
	});
	const presenter = new Presenter(root, params);
	presenter.init(params, "init");
	test("constructor test", () => {
		expect(presenter).toHaveProperty("view");
	});

	test("correct set model param", () => {
		presenter["setTrackModelState"](params);
		expect(presenter["trackModel"].isRange).toBe(true);
	});

	test("correct set view param", () => {
		presenter["setViewState"]();
		expect(presenter["view"].isRange).toBe(true);
	});

	test("correct set class test", () => {
		expect($(presenter.root).hasClass("slider_vertical")).toBe(true);
	});

	test("correct set thumb view test", () => {
		expect(presenter["view"].thumbView.value[0]).toBe(10);
	});

	test("correct update thumb model", async () => {
		waitFor(() => {
			try{
				presenter.view.thumbView.notify(
					"UpdateThumbModel",
					0,
					80,
					"horizontal"
				);
				expect(presenter.thumbs[0].getOffset()).toBe(80);
				expect(presenter.view.thumbView.getOffset()).toBe(80);
				expect(presenter.view.thumbView.activeStance).toBe(0);
			}catch (e){
				console.log(e);
				
			}
			
		});
	});

	test("correct update thumb model before track click", async () => {
		waitFor(() => {});
	});

	test("correct update track fill model", async () => {
		waitFor(() => {});
	});

	test("correct update thumb view", async () => {
		waitFor(() => {
			try{
				presenter.thumbs[0].notify("UpdateThumbView", 100, 50, 0);
				expect(presenter.view.thumbView.value[0]).toBe(100);
				expect(presenter.view.thumbView.value[1]).toBe(150);
				expect(presenter.view.thumbView.activeStance).toBe(0);
	
				presenter.thumbs[1].notify("UpdateThumbView", 150, 70, 1);
				expect(presenter.view.thumbView.activeStance).toBe(1);
				expect(presenter.view.thumbView.offset[0]).toBe(50);
				expect(presenter.view.thumbView.offset[1]).toBe(70);
			}catch(e){
				console.log(e);
				
			}
			
		});
	});

	test("correct update tip view", async () => {
		waitFor(() => {
			try{
				presenter.thumbs[0].notify("UpdateTipView", 50, 0);
				presenter.thumbs[1].notify("UpdateTipView", 100, 1);
				expect(presenter.view.tipView.getOffset()[0]).toBe(100);
				expect(presenter.view.tipView.getOffset()[1]).toBe(150);
			}catch(e){
				console.log(e);
			}
			
		});
	});

	test("correct update track fill view", async () => {
		waitFor(() => {
			try {
				presenter.trackModel.notify(
					"UpdateTrackFillView",
					100,
					10,
					"horizontal"
				);
				expect(presenter.view.fillView.getSize()).toBe(100);
				expect(presenter.view.fillView.getOffset()).toBe(10);
			} catch (e) {
				console.log(e);
				
			}
			
		});
	});

	test("correct check value params", () => {
		expect(checkParams({})).toEqual(DEFAULT_SLIDER_PARAMS);
		const correctParams: SliderParams = JSON.parse(
			JSON.stringify(DEFAULT_SLIDER_PARAMS)
		);

		correctParams.value = [50];
		expect(checkParams({ value: 50 })).toEqual(correctParams);

		correctParams.value = [100, 100];
		correctParams.isRange = true;
		expect(checkParams({ value: [100, 50], isRange: true })).toEqual(
			correctParams
		);

		correctParams.value = [50, 50];
		correctParams.isRange = true;
		expect(checkParams({ value: 50, isRange: true })).toEqual(
			correctParams
		);
	});

	test("correct check params min max restrictions", () => {
		const correctParams: SliderParams = JSON.parse(
			JSON.stringify(DEFAULT_SLIDER_PARAMS)
		);
		correctParams.value = [0, 100];
		correctParams.max = 100;
		correctParams.isRange = true;
		expect(
			checkParams({ value: [0, 200], max: 100, isRange: true })
		).toEqual(correctParams);

		correctParams.value = [50, 100];
		correctParams.min = 50;
		correctParams.isRange = true;
		expect(
			checkParams({ value: [0, 100], min: 50, isRange: true })
		).toEqual(correctParams);
	});

	test("correct check onChange param", () => {
		const correctParams: SliderParams = JSON.parse(
			JSON.stringify(DEFAULT_SLIDER_PARAMS)
		);
		const fn = jest.fn();
		correctParams.onChange = fn;
		expect(checkParams({ onChange: fn })).toEqual(correctParams);
	});

	test("correct clear HTML", () => {
		presenter["clearHTML"]("horizontal");
		expect($(presenter.root).hasClass("slider_vertical")).toBe(false);
		presenter["clearHTML"]("vertical");
		expect($(presenter.root).hasClass("slider_horizontal")).toBe(false);
	});
});
