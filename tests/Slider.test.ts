import checkParams from "../src/Presenter/PresenterModules/checkParams";
import Slider from "../src/Slider";


beforeEach(() => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("View test", () => {
    const slider = new Slider(".slider-1",{});
    
	test("constructor test", () => {
		expect(slider['params']).toEqual(checkParams({}));
	});
	
	
    
	
});
