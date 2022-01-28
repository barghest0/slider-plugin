import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import Slider from '../../src/Slider';
import '@testing-library/jest-dom';

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
});

describe("PreviewSlider test", () => {
    const root = '.slider-1';
    const previewSlider = new PreviewSlider(root, {});

    test('constructor test', () => {
        expect(previewSlider.panel).toBeInstanceOf(Panel);
        expect(previewSlider.slider).toBeInstanceOf(Slider);
    });

    test('init test', () => {
        expect(previewSlider.panel.firstValueInput).toBeInTheDocument();
    });


});
