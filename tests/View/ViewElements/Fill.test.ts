import View from '../../../src/View/View';
import Fill from '../../../src/View/ViewElements/Fill/Fill';
import { Directions } from '../../../src/utils/interfaces';

describe('Fill test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const fill = new Fill(view);

  fill.createFill(Directions.horizontal);

  test('is DOM fill instance of HTMLElement test', () => {
    expect(fill.fill).toBeInstanceOf(HTMLElement);
  });

  test('setSize test', () => {
    fill.setSize(100);
    expect(fill).toHaveProperty('size', 100);
  });

  test('setOffset test', () => {
    fill.setOffset(100);
    expect(fill).toHaveProperty('offset', 100);
  });

  test('correct updateFill with single thumb test', () => {
    fill.setSize(50);
    fill.updateFill();
    expect(fill.fill.style.width).toBe('50%');
  });

  test('correct updateFill with range test', () => {
    view.params.isRange = true;
    fill.setOffset(20);
    fill.setSize(80);
    fill.updateFill();
    expect(fill.fill.style.width).toBe('80%');
    expect(fill.fill.style.left).toBe('20%');
  });
});
