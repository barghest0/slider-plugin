import View from '../../../src/components/View/View';
import Thumb from '../../../src/components/View/SubViews/Thumb/Thumb';

import { Directions, Params } from '../../../src/components/Slider/types';
import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
} from '../../../src/components/Slider/constants';
import Model from '../../../src/components/Model/Model';
import {
  ModelSubscribersNames,
  ViewSubscribersNames,
} from '../../../src/components/Observer/types';

describe('Thumb test', () => {
  document.body.innerHTML =
    '<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const thumb = new Thumb(view);
  const model = new Model(root);
  thumb.renderThumb(FIRST_THUMB_STANCE);
  thumb.renderThumb(SECOND_THUMB_STANCE);

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

  test('expect return initial stance thumb if first value less than second', () => {
    thumb.view.setValue(FIRST_THUMB_STANCE, 60);
    thumb.view.setValue(SECOND_THUMB_STANCE, 100);
    expect(thumb.validateCollision(FIRST_THUMB_STANCE)).toBe(FIRST_THUMB_STANCE);
  });

  test('expect return reverse stance thumb if first value bigger than second', () => {
    thumb.view.setValue(FIRST_THUMB_STANCE, 150);
    thumb.view.setValue(SECOND_THUMB_STANCE, 100);
    expect(thumb.validateCollision(FIRST_THUMB_STANCE)).toBe(SECOND_THUMB_STANCE);
  });

  test('expect return reverse stance thumb if first value bigger than second', () => {
    thumb.view.setValue(FIRST_THUMB_STANCE, 150);
    thumb.view.setValue(SECOND_THUMB_STANCE, 100);
    expect(thumb.validateCollision(SECOND_THUMB_STANCE)).toBe(FIRST_THUMB_STANCE);
  });

  const DOMthumb = thumb.thumbs[FIRST_THUMB_STANCE];
  const subscriberFn = jest.fn();
  thumb.subscribe(ViewSubscribersNames.updateThumb, subscriberFn);
  model.subscribe(ModelSubscribersNames.updateThumbView, subscriberFn);
  model.subscribe(ModelSubscribersNames.updateFillView, subscriberFn);
  thumb.dragAndDropThumb(FIRST_THUMB_STANCE);

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

  test('expect calling validateCollision when drag first thumb', () => {
    const validateCollision = jest.spyOn(thumb, 'validateCollision');
    view.setParam(Params.isRange, true);
    DOMthumb.dispatchEvent(new Event('pointerdown'));
    document.dispatchEvent(new Event('pointermove'));
    expect(validateCollision).toBeCalled();
  });
});
