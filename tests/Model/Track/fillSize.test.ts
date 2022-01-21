import TrackModel from "../../../src/Model/TrackModel";

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("TrackModel test", () => {
    const track = new TrackModel(".slider-1");
    test("correct ends test", () => {
        track.setFillSize(50);
        expect(track.getFillSize()).toBe(50);
    });
});
