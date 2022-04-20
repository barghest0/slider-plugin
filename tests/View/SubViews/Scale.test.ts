import View from '../../../src/components/View/View';
import Scale from '../../../src/components/View/SubViews/Scale/Scale';
import prepareScaleData from '../../../src/components/View/SubViews/Scale/utils/prepareScaleData';
import { Directions } from '../../../src/components/Slider/types';

describe('Scale test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const scale = new Scale(view);
  
  beforeAll(()=>{
    scale.renderScale(Directions.horizontal);
  })

  test('is DOM scale instance of HTMLElement test', () => {
    expect(scale.scale).toBeInstanceOf(HTMLElement);
  });

  test('expect correct scale marks values with default params', () => {
    expect(prepareScaleData(0, 100, 10, Directions.horizontal)).toEqual({
      offsets: [0, 20, 40, 60, 80, 100],
      values: [0, 20, 40, 60, 80, 100],
    });
  });

  test('expect correct scale marks values with ugly step in horizontal direction', () => {
    expect(prepareScaleData(0, 100, 13, Directions.horizontal)).toEqual({
      offsets: [0, 13, 26, 39, 52, 65, 78, 91, 100],
      values: [0, 13, 26, 39, 52, 65, 78, 91, 100],
    });
  });

  test('expect correct scale marks values with ugly step in vertical direction', () => {
    expect(prepareScaleData(0, 100, 13, Directions.vertical)).toEqual({
      offsets: [100, 87, 74, 61, 48, 35, 22, 9, 0],
      values: [0, 13, 26, 39, 52, 65, 78, 91, 100],
    });
  });
});
