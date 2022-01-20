import TrackModel from "../../../src/Model/TrackModel";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("TrackModel test", () => {
	const track = new TrackModel(".slider-1");
	test("correct setEnds test", () => {
		track.setEnds({ min: 0, max: 100 });
		expect(track).toHaveProperty("ends", { min: 0, max: 100 });
	});
});
