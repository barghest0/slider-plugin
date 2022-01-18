import Slider from "../../src/Slider";






describe('if slider init',()=>{
    
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;

    const slider = new Slider('.slider-1', {
        direction: 'vertical',
    });

    test('correct init vertical slider',  () => {
        expect($(slider.presenter.root).hasClass('slider_vertical')).toBe(true);
    })
})