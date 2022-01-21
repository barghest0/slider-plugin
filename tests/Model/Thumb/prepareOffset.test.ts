import ThumbModel from "../../../src/Model/ThumbModel";
import prepareOffset from '../../../src/Model/ThumbModelModules/prepareOffset';
import Slider from '../../../src/Slider';

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("ThumbModel test", () => {
    const slider = new Slider(".slider-1", { isRange: true, direction: 'vertical' });
    const thumb = slider.presenter.thumbs[0];
    const offset = thumb.getOffset();
    test("prepare offset test", () => {
        expect(thumb['prepareOffset'](offset, 'vertical')).toBe(100 - offset);
    });
});
