import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";
import View from "../../../src/View/View";
import Thumb from "../../../src/View/ViewElements/Thumb/Thumb";
import ThumbModel from "../../../src/Model/ThumbModel";
import TrackModel from "../../../src/Model/TrackModel";
import { SubscribersNames } from "../../../src/utils/interfaces";

describe("Thumb test", () => {
	document.body.innerHTML =
		'<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
	const rootClass = ".slider-1";
	const root = document.querySelector(rootClass) as HTMLElement;
	const view = new View(root);
	const thumb = new Thumb(view);
	const thumbModel = new ThumbModel(root, 0);
	const trackModel = new TrackModel(root);
	thumb.createThumb(0);
	thumb.createThumb(1);

	test("constructor test", () => {
		expect(thumb).toHaveProperty("view");
	});

	test("correct append thumb to DOM test", () => {
		const DOMThumb = screen.getByTestId("test-thumb-0");
		expect(DOMThumb).toBeInTheDocument();
	});

	test("setStep test", () => {
		thumb.setStep(100, 10, 10);
		expect(thumb.getStep().step).toBe(100);
	});

	test("setValue test", () => {
		thumb.setValue(100, 0);
		expect(thumb.getValue()[0]).toBe(100);
		thumb.setValue(150, 1);
		expect(thumb.getValue()[1]).toBe(150);
	});

	test("setOffset test", () => {
		thumb.setOffset(50, 0);
		expect(thumb.getOffset()[0]).toBe(50);
		thumb.setOffset(60, 1);
		expect(thumb.getOffset()[1]).toBe(60);
	});

	test("setIsDecimal test", () => {
		thumb.setIsDecimal(false, 10);
		expect(thumb.decimalPlaces).toBe(0);
		thumb.setIsDecimal(true, 10);
		expect(thumb.decimalPlaces).toBe(10);
	});

	test("correct validate collision", () => {
		thumb.setValue(150, 0);
		thumb.setValue(100, 1);
		expect(thumb.validateCollision(0)).toBe(1);
		thumb.setValue(90, 0);
		expect(thumb.validateCollision(0)).toBe(0);
		thumb.setValue(80, 1);
		expect(thumb.validateCollision(1)).toBe(0);
	});

	test("correct notify before drag thumb test", () => {
		const fn = jest.fn();
		thumb.dragAndDropThumb(0);
		thumb.subscribe(SubscribersNames.updateThumbModel, fn);
		thumb.subscribe(SubscribersNames.updateTrackFillModel, fn);
		thumbModel.subscribe(SubscribersNames.updatePanelValues, fn);
		thumbModel.subscribe(SubscribersNames.updateThumbView, fn);
		thumbModel.subscribe(SubscribersNames.updateTipView, fn);
		trackModel.subscribe(SubscribersNames.updateTrackFillView, fn);
		const notify = jest.spyOn(thumb, "notify");

		const DOMThumb = screen.getByTestId("test-thumb-0");
		DOMThumb.dispatchEvent(new Event("pointerdown"));
		document.dispatchEvent(new Event("pointermove"));
		expect(notify).toBeCalled();
	});

	test("correct handle drag test", () => {
		thumb.dragAndDropThumb(0);
		view.isRange = true;
		const validateCollision = jest.spyOn(thumb, "validateCollision");
		const DOMThumb = screen.getByTestId("test-thumb-0");
		DOMThumb.dispatchEvent(new Event("pointerdown"));
		document.dispatchEvent(new Event("pointermove"));
		expect(validateCollision).toBeCalled();
	});
});
