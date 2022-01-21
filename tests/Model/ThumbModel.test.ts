import ThumbModel from "../../src/Model/ThumbModel";

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("ThumbModel test", () => {

    const thumb = new ThumbModel(".slider-1", 0);

    test("constructor test", () => {
        expect(thumb).toHaveProperty("stance", 0);
    });

    test("correct value test", () => {
        thumb.setValue(100);
        expect(thumb.getValue()).toBe(100);
    });

    test("correct step test", () => {
        thumb.setStep(10, { min: 0, max: 100 });
        expect(thumb).toHaveProperty("step", 10);
        expect(thumb).toHaveProperty("stepCount", 10);
        expect(thumb).toHaveProperty("stepPercent", 10);
    });

    test("prepare offset test", () => {
        const offset = thumb.getOffset();
        expect(thumb['prepareOffset'](offset, 'vertical')).toBe(100 - offset);
    });

    test("ends validation test", () => {
        thumb.setOffset(110);
        thumb['endsValidation']({ min: 0, max: 100 }, 'horizontal');
        expect(thumb.getOffset()).toBe(100);
    });
});
