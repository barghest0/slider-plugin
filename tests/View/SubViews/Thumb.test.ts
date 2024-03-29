import prepareOffset from 'utils/prepareOffset';
import View from 'components/View/View';
import Thumb from 'components/View/SubViews/Thumb/Thumb';
import { Directions, Params } from 'components/Slider/types';
import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  MAX_OFFSET,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';
import Model from 'components/Model/Model';
import {
  ModelSubscribersNames,
  ViewSubscribersNames,
} from 'components/Observer/types';
import {
  DEFAULT_Z_INDEX,
  UPPER_Z_INDEX,
} from 'components/View/SubViews/Thumb/constants';

describe('Thumb test', () => {
  document.body.innerHTML =
    '<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const thumb = new Thumb(view);
  const model = new Model(root);

  let DOMthumb: HTMLElement;
  const subscriberMockFunction = jest.fn();
  beforeAll(() => {
    thumb.renderThumb(FIRST_THUMB_STANCE);
    thumb.renderThumb(SECOND_THUMB_STANCE);
    thumb.dragAndDropThumb(FIRST_THUMB_STANCE);

    thumb.subscribe(ViewSubscribersNames.updateThumb, subscriberMockFunction);
    model.subscribe(
      ModelSubscribersNames.updateThumbView,
      subscriberMockFunction,
    );
    model.subscribe(
      ModelSubscribersNames.updateFillView,
      subscriberMockFunction,
    );
    DOMthumb = thumb.thumbs[FIRST_THUMB_STANCE];
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('is DOM first thumb instance of HTMLElement test', () => {
    expect(thumb.thumbs[FIRST_THUMB_STANCE]).toBeInstanceOf(HTMLElement);
  });
  test('is DOM second thumb instance of HTMLElement test', () => {
    expect(thumb.thumbs[SECOND_THUMB_STANCE]).toBeInstanceOf(HTMLElement);
  });

  test('correct set/get 50 first`s thumb offset', () => {
    thumb.setOffset(FIRST_THUMB_STANCE, 50);

    expect(thumb.getOffset()[FIRST_OFFSET]).toBe(50);
  });

  test('correct set/get 60 seconds`s thumb offset', () => {
    thumb.setOffset(SECOND_THUMB_STANCE, 60);

    expect(thumb.getOffset()[SECOND_OFFSET]).toBe(60);
  });

  test('expect notify model before drag first thumb in horizontal/vertical direction', () => {
    const notify = jest.spyOn(thumb, 'notify');
    view.setParam(Params.direction, Directions.horizontal);
    DOMthumb.dispatchEvent(new Event('pointerdown'));
    document.dispatchEvent(new Event('pointermove'));

    expect(notify).toBeCalled();

    view.setParam(Params.direction, Directions.vertical);
    DOMthumb.dispatchEvent(new Event('pointerdown'));
    document.dispatchEvent(new Event('pointermove'));

    expect(notify).toBeCalled();
  });
});
