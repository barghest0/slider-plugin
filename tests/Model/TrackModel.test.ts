import TrackModel from '../../src/Model/TrackModel';
import Presenter from '../../src/Presenter/Presenter';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import View from '../../src/View/View';
import Thumb from '../../src/View/ViewElements/Thumb/Thumb';

beforeEach(() => {
    document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
});

describe('TrackModel test', () => {
    const rootClass = '.slider-1';
    const root = document.querySelector(rootClass) as HTMLElement;
    const presenter = new Presenter(rootClass, checkParams({}));
    const view = new View(root);
    const track = new TrackModel(root);
    const thumb = new Thumb(view);
    test('constructor test', () => {
        expect(track).toHaveProperty('root', root);
    });
    test('correct fill offset test', () => {
        track.setFillOffset(50);
        expect(track.getFillOffset()).toBe(50);
    });
    test('correct fill seize test', () => {
        track.setFillSize(50);
        expect(track.getFillSize()).toBe(50);
    });

    test('correct ends test', () => {
        track.setFillSize(50);
        expect(track.getFillSize()).toBe(50);
    });

    test('correct set direction test', () => {
        track.setDirection('horizontal');
        expect(track.direction).toBe('horizontal');
    });

    test('correct set isRange test', () => {
        track.setIsRange(true);
        expect(track.isRange).toBe(true);
    });

    test('correct set subviews test', () => {
        track.setSubViews(true, true, true);
        expect(track).toHaveProperty('hasFill', true);
        expect(track).toHaveProperty('hasScale', true);
        expect(track).toHaveProperty('hasTips', true);
    });

    test('correct calculate fill offset', () => {
        thumb.createThumb(0);
        thumb.createThumb(1);
        track.setIsRange(false);

        track.size = 200;
        expect(track.calculateFillOffset('horizontal')).toBe(0);
        track.setIsRange(true);

        $(`${root} .slider__thumb-0`).css({ left: `${100}px` });
        expect(track.calculateFillOffset('horizontal')).toBe(50);

        $(`${root} .slider__thumb-1`).css({ top: `${100}px` });
        expect(track.calculateFillOffset('vertical')).toBe(50);
    });

    test('correct calculate fill size', () => {
        thumb.createThumb(0);
        thumb.createThumb(1);
        track.setIsRange(false);
        $(`${root} .slider__thumb-0`).css({ left: `${100}px` });
        expect(track.calculateFillSize('horizontal')).toBe(50);

        $(`${root} .slider__thumb-0`).css({ bottom: `${100}px` });
        $(`${root} .slider__thumb-0`).css({ height: `${15}px` });
        expect(track.calculateFillSize('vertical')).toBe(57.5);

        $(`${root} .slider__thumb-1`).css({ left: `${150}px` });
        track.setIsRange(true);
        expect(track.calculateFillSize('horizontal')).toBe(25);

        $(`${root} .slider__thumb-0`).css({ top: `${150}px` });
        $(`${root} .slider__thumb-1`).css({ top: `${100}px` });
        expect(track.calculateFillSize('vertical')).toBe(25);
    });

    test('correct update track fill view', () => {
        const fn = jest.fn();
        track.subscribe('UpdateTrackFillView', fn);
        track.updateTrackFill('horizontal');
        expect(fn).toBeCalled();
    });
});
