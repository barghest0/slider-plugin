import View from '../../../src/components/View/View';
import Fill from '../../../src/components/View/SubViews/Fill/Fill';

import { Directions } from '../../../src/components/Slider/types';

describe('Fill test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const fill = new Fill(view);

  fill.renderFill(Directions.horizontal);

  test('is DOM fill instance of HTMLElement test', () => {
    expect(fill.fill).toBeInstanceOf(HTMLElement);
  });

  test('correct set/get 100 size and 100 offset', () => {
    fill.setState({ fillOffset: 100, fillSize: 100 });
    expect(fill.getState()).toEqual({ fillOffset: 100, fillSize: 100 });
  });

  test('expect change fill size and offset to 50% before calling update fill in horizontal/vertical direction', () => {
    view.prepareDirectionForInteraction(Directions.horizontal);
    fill.setState({ fillOffset: 50, fillSize: 50 });
    fill.updateFillStyle();
    expect(fill.fill.style.width).toBe('50%');

    view.prepareDirectionForInteraction(Directions.vertical);
    fill.setState({ fillOffset: 50, fillSize: 50 });
    fill.updateFillStyle();
    expect(fill.fill.style.height).toBe('50%');
  });
});
