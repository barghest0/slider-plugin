import '@testing-library/jest-dom';
import View from '../../../src/View/View';
import Thumb from '../../../src/View/ViewElements/Thumb/Thumb';

import { Directions, SubscribersNames } from '../../../src/utils/interfaces';
import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  FIRST_VALUE,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
  SECOND_VALUE,
} from '../../../src/utils/constants';
import Model from '../../../src/Model/Model';

describe('Thumb test', () => {
  document.body.innerHTML =
    '<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const thumb = new Thumb(view);
  const model = new Model(root);
  thumb.createThumb(FIRST_THUMB_STANCE);
  thumb.createThumb(SECOND_THUMB_STANCE);

  test('constructor test', () => {
    expect(thumb).toHaveProperty('view');
  });

  test('check presence first thumb in the document', () => {
    expect(thumb.thumbs[FIRST_THUMB_STANCE]).toBeInTheDocument();
  });

  test('check presence first thumb in the document', () => {
    expect(thumb.thumbs[SECOND_THUMB_STANCE]).toBeInTheDocument();
  });

  test('correct set/get 100 first`s thumb value', () => {
    thumb.setValue(100, FIRST_THUMB_STANCE);
    expect(thumb.getValue()[FIRST_VALUE]).toBe(100);
  });

  test('correct set/get 150 seconds`s thumb value', () => {
    thumb.setValue(150, SECOND_THUMB_STANCE);
    expect(thumb.getValue()[SECOND_VALUE]).toBe(150);
  });

  test('correct set/get 50 first`s thumb offset', () => {
    thumb.setOffset(50, FIRST_THUMB_STANCE);
    expect(thumb.getOffset()[FIRST_OFFSET]).toBe(50);
  });

  test('correct set/get 60 seconds`s thumb offset', () => {
    thumb.setOffset(60, SECOND_THUMB_STANCE);
    expect(thumb.getOffset()[SECOND_OFFSET]).toBe(60);
  });

  test('expect return initial stance thumb if first value less than second', () => {
    thumb.setValue(60, FIRST_THUMB_STANCE);
    thumb.setValue(100, SECOND_THUMB_STANCE);
    expect(thumb.validateCollision(FIRST_THUMB_STANCE)).toBe(
      FIRST_THUMB_STANCE,
    );
  });

  test('expect return reverse stance thumb if first value bigger than second', () => {
    thumb.setValue(150, FIRST_THUMB_STANCE);
    thumb.setValue(100, SECOND_THUMB_STANCE);
    expect(thumb.validateCollision(FIRST_THUMB_STANCE)).toBe(
      SECOND_THUMB_STANCE,
    );
  });

  test('expect return reverse stance thumb if first value bigger than second', () => {
    thumb.setValue(150, FIRST_THUMB_STANCE);
    thumb.setValue(100, SECOND_THUMB_STANCE);
    expect(thumb.validateCollision(SECOND_THUMB_STANCE)).toBe(
      FIRST_THUMB_STANCE,
    );
  });

  const DOMthumb = thumb.thumbs[FIRST_THUMB_STANCE];
  const subscriberFn = jest.fn();
  thumb.subscribe(SubscribersNames.updateThumb, subscriberFn);
  thumb.subscribe(SubscribersNames.updateFill, subscriberFn);
  model.subscribe(SubscribersNames.updateValues, subscriberFn);
  model.subscribe(SubscribersNames.updateThumbView, subscriberFn);
  model.subscribe(SubscribersNames.updateTipView, subscriberFn);
  model.subscribe(SubscribersNames.updateFillView, subscriberFn);
  thumb.dragAndDropThumb(FIRST_THUMB_STANCE);

  test('expect notify model before drag first thumb in horizontal/vertical direction', () => {
    const notify = jest.spyOn(thumb, 'notify');
    view.params.direction = Directions.horizontal;
    DOMthumb.dispatchEvent(new Event('pointerdown'));
    document.dispatchEvent(new Event('pointermove'));
    expect(notify).toBeCalled();

    view.params.direction = Directions.vertical;
    DOMthumb.dispatchEvent(new Event('pointerdown'));
    document.dispatchEvent(new Event('pointermove'));
    expect(notify).toBeCalled();
  });

  test('expect calling validateCollision when drag first thumb', () => {
    const validateCollision = jest.spyOn(thumb, 'validateCollision');
    view.params.isRange = true;
    DOMthumb.dispatchEvent(new Event('pointerdown'));
    document.dispatchEvent(new Event('pointermove'));
    expect(validateCollision).toBeCalled();
  });
});
