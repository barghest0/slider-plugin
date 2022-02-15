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

  test('correct set/get 100 size', () => {
    fill.setSize(100);
    expect(fill.getSize()).toBe(100);
  });

  test('correct set/get 100 offset', () => {
    fill.setOffset(100);
    expect(fill.getOffset()).toBe(100);
  });

  test('expect change fill size to 50% before calling update fill in horizontal/vertical direction', () => {
    view.prepareDirectionForInteraction(Directions.horizontal);
    fill.setSize(50);
    fill.updateFill();
    expect(fill.fill.style.width).toBe('50%');

    view.prepareDirectionForInteraction(Directions.vertical);
    fill.setSize(50);
    fill.updateFill();
    expect(fill.fill.style.height).toBe('50%');
  });

  test('expect change fill offset to 50% before calling update fill in horizontal/vertical direction', () => {
    view.prepareDirectionForInteraction(Directions.horizontal);
    fill.setOffset(50);
    fill.updateFill();
    expect(fill.fill.style.width).toBe('50%');

    view.prepareDirectionForInteraction(Directions.vertical);
    fill.setOffset(50);
    fill.updateFill();
    expect(fill.fill.style.height).toBe('50%');
  });
});
