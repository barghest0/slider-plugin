import TrackModel from "../../../src/Model/TrackModel";

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("TrackModel test", () => {
    const track = new TrackModel(".slider-1");
    test("correct fill offset test", () => {
        track.setFillOffset(50);
        expect(track.getFillOffset()).toBe(50);
    });
});
