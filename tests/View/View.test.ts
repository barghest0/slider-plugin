import '@testing-library/jest-dom';
import View from '../../src/View/View';
import { Directions, Params } from '../../src/utils/interfaces';
import { DEFAULT_SLIDER_PARAMS } from '../../src/utils/constants';

describe('View test', () => {
  document.body.innerHTML = `<div id="slider-1" data-testid="slider-1" class="slider-1"></div>`;
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  test('constructor test', () => {
    expect(view.DOMroot).toBeInstanceOf(HTMLElement);
  });

  test('correct set/get params', () => {
    view.setParams(DEFAULT_SLIDER_PARAMS);
    expect(view).toHaveProperty('params', DEFAULT_SLIDER_PARAMS);
  });

  test('correct set param', () => {
    view.setParam(Params.hasFill, true);
    expect(view.params.hasFill).toBeTruthy();
  });

  test('correct set/get size', () => {
    view.setSize(400);
    expect(view.getSize()).toBe(400);
  });

  test('expect offset equal 100 when cursorOffset equal 100 in horizontal/vertical direction', () => {
    expect(
      view.calculateCursorOffset(200, Directions.horizontal, root, 200),
    ).toBe(100);

    expect(
      view.calculateCursorOffset(200, Directions.vertical, root, 200),
    ).toBe(100);
  });

  test('expect fill direction equal width, offset direction equal left in horizontal direction', () => {
    view.prepareDirectionForInteraction(Directions.horizontal);
    expect(view.fillDirection).toBe('width');
    expect(view.offsetDirection).toBe('left');
  });

  test('expect fill direction equal height, offset direction equal top in horizontal direction', () => {
    view.prepareDirectionForInteraction(Directions.vertical);
    expect(view.fillDirection).toBe('height');
    expect(view.offsetDirection).toBe('top');
  });
});
