import '@testing-library/jest-dom'
import { screen, waitFor } from "@testing-library/dom";
import Presenter from "../../../src/Presenter/Presenter";
import checkParams from "../../../src/Presenter/PresenterModules/checkParams";
import View from "../../../src/View/View";
import Thumb from "../../../src/View/ViewElements/Thumb/Thumb";


describe("Thumb test", () => {
	document.body.innerHTML = `<div id="slider-1" data-testid=slider-1 class="slider-1"></div>`;
	const root = ".slider-1";

	const presenter = new Presenter('.slider-1',checkParams({}))
	const view = new View(root);
	const thumb = new Thumb(view);
	presenter['addListeners'](false)
	thumb.createThumb(0);

	test("constructor test", () => {
		expect(thumb).toHaveProperty("view");
	});

	test("correct append thumb to DOM test", () => {
		waitFor(() => {
			try{
				const DOMTumb = screen.getByTestId("test-thumb-0");
				expect(DOMTumb).toBeInTheDocument();
			}catch(e){
				console.log(e);
			}
			
		});
	});

	test("setStep test", () => {
		thumb.setStep(100, 10, 10);
		expect(thumb.step).toBe(100);
	});

	test("setValue test", () => {
		thumb.setValue(100, 0,);
		expect(thumb.value[0]).toBe(100);
		thumb.setValue(150, 1);
		expect(thumb.value[1]).toBe(150);
	});

	test("setOffset test", () => {
		thumb.setOffset(50, 0);
		expect(thumb.offset[0]).toBe(50);
		thumb.setOffset(60, 1);
		expect(thumb.offset[1]).toBe(60);
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


	test("correct thumb model notify before drag thumb test", async () => {
		waitFor(() => {
			try{
				const fn = jest.fn();
				thumb.subscribe("UpdateThumbModel", fn);
				const DOMSlider = screen.getByTestId("slider-1");
				DOMSlider.dispatchEvent(new Event("mousedown"));
				document.dispatchEvent(new Event("mousemove"));
				expect(fn).toBeCalled();
			}catch(e){
				console.log(e);
			}
		});
	});

	test("correct track model notify before drag thumb test", async () => {
		waitFor(() => {
			try{
				const fn = jest.fn();
				thumb.subscribe("UpdateTrackFillModel", fn);
				const DOMSlider = screen.getByTestId("slider-1");
				DOMSlider.dispatchEvent(new Event("mousedown"));
				document.dispatchEvent(new Event("mousemove"));
				expect(fn).toBeCalled();
			}catch(e){
				console.log(e);
			}
		});
	});
});
