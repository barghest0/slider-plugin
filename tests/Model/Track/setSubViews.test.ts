import TrackModel from '../../../src/Model/TrackModel';

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("TrackModel test", () => {
    const track = new TrackModel(".slider-1");
    test("correct value test", () => {
        track.setSubViews(true, true, true);
        expect(track).toHaveProperty("hasFill", true);
        expect(track).toHaveProperty("hasScale", true);
        expect(track).toHaveProperty("hasTips", true);
    });
});
