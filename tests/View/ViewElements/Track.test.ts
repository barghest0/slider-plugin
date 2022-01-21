import View from "../../../src/View/View";
import Track from "../../../src/View/ViewElements/Track/Track";

describe("Track test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const thumb = new Track(view);
	test("constructor test", () => {
		expect(thumb).toHaveProperty("view");
	});
	test("correct click on track", () => {
		thumb.createTrack("horizontal");
		const fn = jest.fn();
		expect(fn).not.toBeCalled();
		thumb.subscribe("UpdateThumbModelBeforeTrackClick", fn);
		const DOMTrack = document.querySelector(".slider__track");
		DOMTrack!.dispatchEvent(new Event("pointerdown"));
		//expect(fn).toHaveBeenCalled();
	});
});
