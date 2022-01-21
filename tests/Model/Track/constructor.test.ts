import TrackModel from "../../../src/Model/TrackModel";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("TrackModel test", () => {
	const track = new TrackModel(".slider-1");
	test("constructor test", () => {
		expect(track).toHaveProperty("root", ".slider-1");
	});
});
