import View from 'components/View/View';
import Scale from 'components/View/SubViews/Scale/Scale';
import prepareScaleData from 'components/View/SubViews/Scale/utils/prepareScaleData';
import { Directions, Params } from 'components/Slider/types';
import { MARK_NUMBER_CLASS } from 'components/View/SubViews/Scale/constants';
import { ViewSubscribersNames } from 'components/Observer/types';

describe('Scale test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const scale = new Scale(view);

  const subscriberMockFunction = jest.fn();
  beforeAll(() => {
    scale.renderScale(Directions.horizontal);
    scale.renderScaleMarks(1, 100, 0, Directions.horizontal);
    scale.subscribe(
      ViewSubscribersNames.updateThumbAfterScaleMarkClick,
      subscriberMockFunction,
    );
  });

  test('is DOM scale instance of HTMLElement test', () => {
    expect(scale.scale).toBeInstanceOf(HTMLElement);
  });

  test('correct set/get 100 cursor offset', () => {
    scale.setCursorOffset(100);

    expect(scale.getCursorOffset()).toEqual(100);
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

  test('expect notify model after click scale mark in horizontal/vertical direction', () => {
    jest.spyOn(scale, 'notify');
    view.setParam(Params.direction, Directions.horizontal);
    const scaleMarkNumber = scale.scale.querySelector(
      `.${MARK_NUMBER_CLASS}`,
    ) as HTMLDivElement;

    scaleMarkNumber.dispatchEvent(new MouseEvent('pointerdown'));

    expect(scale.notify).toBeCalled();

    view.setParam(Params.direction, Directions.vertical);
    scaleMarkNumber.dispatchEvent(new MouseEvent('pointerdown'));

    expect(scale.notify).toBeCalled();
  });
});
