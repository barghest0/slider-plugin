import { screen, waitFor } from "@testing-library/dom";
import View from "../../../src/View/View";
import Thumb from "../../../src/View/ViewElements/Thumb/Thumb";
import validateCollision from "../../../src/View/ViewElements/Thumb/utils/validateCollision";

describe("Thumb test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const thumb = new Thumb(view);
	test("constructor test", () => {
		expect(thumb).toHaveProperty("view");
	});

	test("correct append thumb to DOM test", () => {
		thumb.createThumb(0);
		waitFor(() => {
			const DOMTumb0 = screen.getByTestId("test-thumb-0");
			expect(DOMTumb0).toBeInTheDocument();
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

	test("correct drag thumb test", () => {
		const spy = jest.spyOn(thumb, "dragThumb");
		thumb.dragThumb(0);
		expect(spy).toBeCalled();
	});

	test("correct thumb model notify before drag thumb test", async () => {
		const fn = jest.fn;
		thumb.createThumb(0);
		thumb.subscribe("UpdateThumbModel", fn);
		waitFor(() => {
			const DOMThumb = screen.getByTestId("test-thumb");
			DOMThumb.dispatchEvent(new Event("pointerdown"));
			document.dispatchEvent(new Event("pointermove"));
			document.dispatchEvent(new Event("pointerup"));
			expect(fn).toBeCalled();
		});
	});

	test("correct track model notify before drag thumb test", async () => {
		const fn = jest.fn;
		thumb.createThumb(0);
		thumb.subscribe("UpdateTrackFillModel", fn);
		waitFor(() => {
			const DOMThumb = screen.getByTestId("test-thumb");
			DOMThumb.dispatchEvent(new Event("pointerdown"));
			document.dispatchEvent(new Event("pointermove"));
			document.dispatchEvent(new Event("pointerup"));
			expect(fn).toBeCalled();
		});
	});
});
