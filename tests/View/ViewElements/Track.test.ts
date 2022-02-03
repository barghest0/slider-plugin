import { screen } from "@testing-library/dom";
import View from "../../../src/View/View";
import Track from "../../../src/View/ViewElements/Track/Track";
import "@testing-library/jest-dom";
import { SubscribersNames } from "../../../src/utils/interfaces";

describe("Track test", () => {
	document.body.innerHTML =
		'<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
	const rootClass = ".slider-1";
	const root = document.querySelector(rootClass) as HTMLElement;
	const view = new View(root);
	const track = new Track(view);
	const fn = jest.fn();
	track.createTrack("horizontal");
	track.clickTrack();

	test("constructor test", () => {
		expect(track).toHaveProperty("view");
	});

	test("correct track model notify before click track test", () => {
		track.subscribe(SubscribersNames.updateThumbModelBeforeTrackClick, fn);
		track.subscribe(SubscribersNames.updateTrackFillModel, fn);
		jest.spyOn(track, "notify");
		const DOMTrack = screen.getByTestId("slider-1");
		DOMTrack.dispatchEvent(new MouseEvent("mousedown"));
		expect(track.notify).toBeCalled();
	});
});
