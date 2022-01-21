import Slider from '../../../src/Slider';

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("TrackModel test", () => {
    const slider = new Slider(".slider-1", {});
    test("correct calculate fill offset test", () => {
        expect(slider.presenter.trackModel.calculateFillOffset('horizontal')).toBe(0);
    });
});
