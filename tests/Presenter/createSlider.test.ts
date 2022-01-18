import Slider from "../../src/Slider";
import { SliderParams } from "../../src/Interfaces/interfaces";



describe('if slider create',()=>{
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
    const slider = new Slider('.slider-1', {
		isRange:true,
		hasScale:false
	});
    const testParams:SliderParams = {
        min: -6,
	    max: 6,
	    step: 3,
	    value: [-3, 3],
	    isRange: true,
	    direction: "horizontal",
	    hasFill: true,
	    hasTips: true,
	    hasScale: true,
	    isDecimal: true,
	    decimalPlaces: 1,
    }

   
})