import View from '../../../src/View/View';
import Scale from '../../../src/View/ViewElements/Scale/Scale';
import prepareScaleData from '../../../src/View/ViewElements/Scale/utils/prepareScaleData';
import { Directions } from '../../../src/utils/interfaces';

describe('Scale test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const scale = new Scale(view);
  scale.createScale(Directions.horizontal);

  test('is DOM scale instance of HTMLElement test', () => {
    expect(scale.scale).toBeInstanceOf(HTMLElement);
  });

  test('correct prepare scale data test', () => {
    expect(prepareScaleData(0, 100, 10)).toEqual({
      offsets: [0, 20, 40, 60, 80, 100],
      values: [0, 20, 40, 60, 80, 100],
    });
  });

  test('correct return values for scale test', () => {
    expect(scale.createScaleMarks(10, 100, 0, Directions.horizontal));
  });
});
