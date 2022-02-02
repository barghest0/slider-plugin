import Panel from '../../src/Demo/Panel/Panel';
import PreviewSlider from '../../src/Demo/PreviewSlider';
import checkParams from '../../src/Presenter/PresenterModules/checkParams';
import '@testing-library/jest-dom';
import renderPanel from '../../src/Demo/Panel/PanelModules/renderPanel';




describe('Panel test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const root = '.slider-1';
  const previewSlider = new PreviewSlider(root, {});
  const panel = new Panel(checkParams({}, previewSlider.DOMroot), root, previewSlider);

  test('constructor test', () => {
    expect(panel.parent).toBeInstanceOf(PreviewSlider);
  });

  test('create panel test', () => {
    const input = document.querySelector('.js-input__first-value') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('number');
    expect(input.parentElement!.classList.contains('custom-input')).toBeTruthy();
    const label = document.querySelector('.js-input');

    const checkbox = document.querySelector('.js-checkbox__is-range') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.type).toBe('checkbox');
    expect(checkbox.parentElement!.classList.contains('js-checkbox')).toBeTruthy();



  });
});
