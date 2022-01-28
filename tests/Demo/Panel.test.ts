import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import '@testing-library/jest-dom';

beforeEach(() => {


});

describe("Panel test", () => {
    document.body.innerHTML = `<div class="
    panel
    mb-5
    col-md-12
    d-flex
    flex-column
    align-items-center
    justify-content-center
">
<h2 class="title">1</h2>
<div class="slider-parent">
<div id="slider-1" class="slider slider-1"></div>
</div>
<div class="row wrap slider-1__panel">
<div class="mb-3 col-sm-6 js-input">
    <label class="d-block">
        Min Value
        <input type="number" step="1" class="form-control js-input__min-value" placeholder="" />
    </label>
</div>
<div class="mb-3 col-sm-6 js-input">
    <label class="d-block">Max Value
        <input type="number" step="1" class="form-control js-input__max-value" />
    </label>
</div>
<div class="mb-3 col-sm-6 js-input">
    <label class="d-block">First Value
        <input type="number" step="1" class="form-control js-input__first-value" /></label>
</div>
<div class="mb-3 col-sm-6 js-input">
    <label class="d-block">Second Value
        <input type="number" step="1" class="form-control js-input__second-value" />
    </label>
</div>
<div class="mb-3 col-sm-6 js-input">
    <label class="d-block">Step
        <input type="number" step="1" class="form-control js-input__step" />
    </label>
</div>
<div class="mb-3 col-sm-6 row align-items-center">
    <div class="col-sm-3">
        <div class="form-check js-checkbox">
            <label class="form-check-label">
                <input class="
                            form-check-input
                            js-checkbox__is-range
                        " type="checkbox" value="" />
                Is Range
            </label>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form-check js-checkbox">
            <label class="form-check-label">
                <input class="
                            form-check-input
                            js-checkbox__vertical
                        " type="checkbox" value="" />
                Vertical
            </label>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form-check js-checkbox">
            <label class="form-check-label">
                <input class="
                            form-check-input
                            js-checkbox__fill
                        " type="checkbox" value="" />
                Fill
            </label>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form-check js-checkbox">
            <label class="form-check-label">
                <input class="
                            form-check-input
                            js-checkbox__tips
                        " type="checkbox" value="" />
                Tips
            </label>
        </div>
    </div>
</div>
</div>
</div>`;

    const root = '.slider-1';

    const previewSlider = new PreviewSlider(root, {});
    const panel = new Panel(checkParams({}), root, previewSlider);

    test('constructor test', () => {
        expect(panel.parent).toBeInstanceOf(PreviewSlider);

    });

});
