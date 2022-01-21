import Presenter from '../../../src/Presenter/Presenter';
import checkParams from '../../../src/Presenter/PresenterModules/checkParams';
import Slider from '../../../src/Slider';
import View from "../../../src/View/View";
import Track from "../../../src/View/ViewElements/Track/Track";

describe("Track test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const slider = new Slider(root, {});
	const view = new View(root);
	const thumb = new Track(view);
	test("constructor test", () => {
		expect(thumb).toHaveProperty("view");
	});
	
});
