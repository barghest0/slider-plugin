import Slider from '../../../src/Slider';
import View from "../../../src/View/View";
import Thumb from "../../../src/View/ViewElements/Thumb/Thumb";
import handleDrag from '../../../src/View/ViewElements/Thumb/utils/handleDrag';
import validateCollision from "../../../src/View/ViewElements/Thumb/utils/validateCollision";

describe("Thumb test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const slider = new Slider(root, {});
	const view = new View(root);
	const thumb = new Thumb(view);
	test("constructor test", () => {
		expect(thumb).toHaveProperty("view");
	});
	test("setStep test", () => {
		thumb.setStep(100, 10, 10);
		expect(thumb.step).toBe(100);
	});

	test("setValue test", () => {
		thumb.setValue(100, 0);
		expect(thumb.value[0]).toBe(100);
		thumb.setValue(150, 1);
		expect(thumb.value[1]).toBe(150);
	});
	
	test("correct validate collision", () => {
		thumb.setValue(150, 0);
		thumb.setValue(100, 1);
		expect(validateCollision.call(thumb, 0)).toBe(1);
		thumb.setValue(90, 0);
		expect(validateCollision.call(thumb, 0)).toBe(0);
		thumb.setValue(80, 1);
		expect(validateCollision.call(thumb, 1)).toBe(0);
	});

	test("correct handle drag test", () => {
		const fn = jest.fn();
		slider.presenter['view'].thumbView.dragThumb = fn;
		slider.presenter['addListeners'](false);
		expect(fn).toHaveBeenCalled();
	});
});
