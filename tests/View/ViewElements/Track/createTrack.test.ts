import Slider from "../../../../src/Slider";
import View from "../../../../src/View/View";
import Track from "../../../../src/View/ViewElements/Track/Track";

beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("View test", () => {
	const view = new View('.slider-1')
	const track = new Track(view);
	test("create track in DOM test", () => {
			track.createTrack('horizontal')
			
	});
});
