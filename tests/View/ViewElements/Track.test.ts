import { screen, waitFor } from "@testing-library/dom";
import View from "../../../src/View/View";
import Track from "../../../src/View/ViewElements/Track/Track";
import '@testing-library/jest-dom';
import TrackModel from '../../../src/Model/TrackModel';
import ThumbModel from '../../../src/Model/ThumbModel';

describe("Track test", () => {
	document.body.innerHTML = `<div id="slider-1" data-testid="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const track = new Track(view);
	const fn = jest.fn();
	const trackModel = new TrackModel(root);
	const thumbModel = new ThumbModel(root, 0);
	track.createTrack("horizontal");
	track.clickTrack();




	test("constructor test", () => {
		expect(track).toHaveProperty("view");
	});

	test("correct track model notify before click track test", () => {
		track.subscribe("UpdateThumbModelBeforeTrackClick", fn);
		track.subscribe("UpdateTrackModelFill", fn);
		jest.spyOn(track, 'notify');
		const DOMTrack = screen.getByTestId("slider-1");
		DOMTrack.dispatchEvent(new MouseEvent("mousedown"));

		expect(track.notify).toBeCalled();
	});

});
