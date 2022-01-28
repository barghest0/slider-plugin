import ThumbModel from '../../src/Model/ThumbModel';

beforeEach(() => {
    document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
});

describe('ThumbModel test', () => {
    const thumbModel = new ThumbModel('.slider-1', 0);

    test('constructor test', () => {
        expect(thumbModel).toHaveProperty('stance', 0);
    });

    test('correct value test', () => {
        thumbModel.setValue(100);
        expect(thumbModel.getValue()).toBe(100);
    });

    test('correct step test', () => {
        thumbModel.setStep(10, { min: 0, max: 100 });
        expect(thumbModel).toHaveProperty('step', 10);
        expect(thumbModel).toHaveProperty('stepCount', 10);
        expect(thumbModel).toHaveProperty('stepPercent', 10);
    });

    test('prepare offset test', () => {
        const offset = thumbModel.getOffset();
        expect(thumbModel['prepareOffset'](offset, 'vertical')).toBe(100 - offset);
    });

    test('ends validation test', () => {
        thumbModel.setOffset(110);
        thumbModel['endsValidation']({ min: 0, max: 100 }, 'horizontal');
        expect(thumbModel.getOffset()).toBe(100);
    });
});
