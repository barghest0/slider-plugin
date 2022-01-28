import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import '@testing-library/jest-dom';
import DOMPanel from './DOMPanel';

beforeEach(() => {
    document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;

});

describe("Panel test", () => {
    document.body.innerHTML = DOMPanel;
    const root = '.slider-1';
    const previewSlider = new PreviewSlider(root, {});
    const panel = new Panel(checkParams({}), root, previewSlider);

    test('constructor test', () => {
        expect(panel.parent).toBeInstanceOf(PreviewSlider);

    });

});
