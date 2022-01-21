import ThumbModel from "../../../src/Model/ThumbModel";
import Slider from '../../../src/Slider';

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("ThumbModel test", () => {
    const slider = new Slider(".slider-1", { isRange: true });
    const thumb = slider.presenter.thumbs[0];
    test("ends validation test", () => {
        thumb.setOffset(110);
        thumb['endsValidation']({ min: 0, max: 100 }, 'horizontal');
        expect(thumb.getOffset()).toBe(100);
    });
});
