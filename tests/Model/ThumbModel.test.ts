import ThumbModel from '../../src/Model/ThumbModel';
import { FIRST_THUMB_STANCE, MAX_OFFSET, MIN_OFFSET } from '../../src/utils/constants';



describe('ThumbModel test', () => {
    document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
    const rootClass = '.slider-1';
    const root = document.querySelector(rootClass) as HTMLElement;
    const thumbModel = new ThumbModel(root, FIRST_THUMB_STANCE);

    test('constructor test', () => {
        expect(thumbModel).toHaveProperty('DOMroot');
        expect(thumbModel).toHaveProperty('stance', FIRST_THUMB_STANCE);
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
        expect(thumbModel['prepareOffset'](offset, 'vertical')).toBe(MAX_OFFSET - offset);
    });

    test('ends validation test', () => {
        thumbModel.setOffset(110);
        thumbModel['endsValidation']({ min: 0, max: 100 }, 'horizontal');
        expect(thumbModel.getOffset()).toBe(MAX_OFFSET);


        thumbModel.setOffset(110);
        thumbModel['endsValidation']({ min: 0, max: 100 }, 'vertical');
        expect(thumbModel.getOffset()).toBe(MAX_OFFSET);


        thumbModel.setOffset(-100);
        thumbModel['endsValidation']({ min: 0, max: 100 }, 'horizontal');
        expect(thumbModel.getOffset()).toBe(MIN_OFFSET);

        thumbModel.setOffset(-100);
        thumbModel['endsValidation']({ min: 0, max: 100 }, 'vertical');
        expect(thumbModel.getOffset()).toBe(MIN_OFFSET);




    });
});
