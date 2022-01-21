import ThumbModel from "../../../src/Model/ThumbModel";

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("ThumbModel test", () => {
    const thumb = new ThumbModel(".slider-1", 0);
    test("correct value test", () => {
        thumb.setValue(100);
        expect(thumb.getValue()).toBe(100);
    });
});
