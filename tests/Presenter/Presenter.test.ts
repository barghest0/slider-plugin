import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  FIRST_VALUE,
  MAIN_CLASS,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
  SECOND_VALUE,
} from '../../src/components/Slider/constants';

import { Directions, Params, SubscribersNames } from '../../src/components/Slider/types';

import '../../src/plugin/plugin';
import { getValidatedParams } from '../../src/utils/validators';
import Presenter from '../../src/components/Presenter/Presenter';

describe('Presenter test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const root = '#slider-1';
  const DOMroot = <HTMLElement>document.querySelector(root);
  const DOMparent = <HTMLElement>DOMroot.parentElement;
  const params = getValidatedParams({ isRange: true, value: [0, 100] });
  const presenter = new Presenter(params, DOMroot, DOMparent);
  presenter.init();

  test('constructor test', () => {
    expect(presenter).toHaveProperty('view');
  });

  test('expect horizontal modifier', () => {
    expect(
      presenter.DOMroot.classList.contains(`${MAIN_CLASS}_${Directions.horizontal}`),
    ).toBeTruthy();
  });

  test('expect change thumb offset to 80 after notify model when drag first thumb', () => {
    presenter.view.thumbView.notify(SubscribersNames.updateThumb, FIRST_THUMB_STANCE, 80);
    expect(presenter.model.getOffset()[FIRST_OFFSET]).toBe(80);
  });

  test('expect change thumb offset to 90 after notify model when drag second thumb', () => {
    presenter.view.thumbView.notify(
      SubscribersNames.updateThumb,
      SECOND_THUMB_STANCE,
      90,
    );
    expect(presenter.model.getOffset()[SECOND_OFFSET]).toBe(90);
  });

  test('expect change thumb offset to 90 after notify model when click track closer to first thumb', () => {
    presenter.model.setFillState({ fillOffset: 30, fillSize: 30 });
    presenter.model.setOffset(FIRST_THUMB_STANCE, 20);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 50);
    presenter.view.trackView.notify(SubscribersNames.updateThumbAfterTrackClick, 90);
    expect(presenter.model.getOffset()[SECOND_OFFSET]).toBe(90);
  });

  test('expect change thumb offset to 90 after notify model when click track closer to second thumb', () => {
    presenter.model.setFillState({ fillOffset: 30, fillSize: 30 });
    presenter.model.setOffset(FIRST_THUMB_STANCE, 20);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 50);
    presenter.view.trackView.notify(SubscribersNames.updateThumbAfterTrackClick, 10);
    expect(presenter.model.getOffset()[FIRST_OFFSET]).toBe(10);
  });

  test('expect change thumb value to 100 and offset to 50 after notify view when drag first thumb', () => {
    presenter.model.setValue(FIRST_THUMB_STANCE, 100);
    presenter.model.setOffset(FIRST_THUMB_STANCE, 50);
    presenter.model.notify(SubscribersNames.updateThumbView, FIRST_THUMB_STANCE);
    expect(presenter.view.getValue()[FIRST_VALUE]).toBe(100);
    expect(presenter.view.thumbView.getOffset()[FIRST_OFFSET]).toBe(50);
    expect(presenter.view.thumbView.activeStance).toBe(FIRST_THUMB_STANCE);
  });

  test('expect change thumb value to 150 and offset to 70 after notify view when drag second thumb', () => {
    presenter.model.setValue(SECOND_THUMB_STANCE, 150);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 70);
    presenter.model.notify(SubscribersNames.updateThumbView, SECOND_THUMB_STANCE);
    expect(presenter.view.getValue()[SECOND_VALUE]).toBe(150);
    expect(presenter.view.thumbView.getOffset()[SECOND_OFFSET]).toBe(70);
    expect(presenter.view.thumbView.activeStance).toBe(SECOND_THUMB_STANCE);
  });

  test('expect change tip value to 50 and offset to 50 after notify view when drag first thumb', () => {
    presenter.model.setValue(FIRST_THUMB_STANCE, 50);
    presenter.model.setOffset(FIRST_THUMB_STANCE, 50);
    presenter.model.notify(SubscribersNames.updateThumbView, FIRST_THUMB_STANCE);
    expect(presenter.view.getValue()[FIRST_VALUE]).toBe(50);
    expect(presenter.view.tipView.getOffset()[FIRST_OFFSET]).toBe(50);
  });

  test('expect change tip value to 100 and offset to 100 after notify view when drag second thumb', () => {
    presenter.model.setValue(SECOND_THUMB_STANCE, 100);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 100);
    presenter.model.notify(SubscribersNames.updateThumbView, SECOND_THUMB_STANCE);
    expect(presenter.view.getValue()[SECOND_VALUE]).toBe(100);
    expect(presenter.view.tipView.getOffset()[SECOND_OFFSET]).toBe(100);
  });

  test('expect change fill size to 30 and offset to 30 after notify model when drag two thumbs', () => {
    presenter.view.thumbView.notify(SubscribersNames.updateThumb, FIRST_THUMB_STANCE, 30);
    presenter.view.thumbView.notify(
      SubscribersNames.updateThumb,
      SECOND_THUMB_STANCE,
      60,
    );
    expect(presenter.model.getFillState()).toEqual({
      fillOffset: 30,
      fillSize: 30,
    });
  });

  test('expect change fill size to 30 and offset to 30 after notify view when', () => {
    presenter.model.setFillState({
      fillSize: 30,
      fillOffset: 30,
    });
    presenter.model.notify(SubscribersNames.updateFillView);
    expect(presenter.view.fillView.getState().fillSize).toBe(30);
    expect(presenter.view.fillView.getState().fillOffset).toBe(30);
  });

  test('correct clear HTML', () => {
    presenter.model.setParam(Params.direction, Directions.horizontal);
    presenter.clearHTML();
    expect(
      presenter.DOMroot.classList.contains(`${MAIN_CLASS}_${Directions.vertical}`),
    ).toBe(false);
    presenter.model.setParam(Params.direction, Directions.vertical);
    presenter.clearHTML();
    expect(
      presenter.DOMroot.classList.contains(`${MAIN_CLASS}_${Directions.horizontal}`),
    ).toBe(false);
  });

  test('correct unsubscribe', () => {
    presenter.unsubscribe();
    expect(
      presenter.view.thumbView.getSubscribers()[SubscribersNames.updateThumb],
    ).toEqual([]);
  });

  const paramsWithoutTips = getValidatedParams({
    isRange: true,
    value: [0, 100],
    hasTips: false,
  });
  const presenterWithoutTips = new Presenter(paramsWithoutTips, DOMroot, DOMparent);
  presenterWithoutTips.init();

  test('correct unsubscribe without tips', () => {
    const fn = jest.fn();
    presenter.updateTipView = fn;
    presenterWithoutTips.unsubscribe();
    expect(
      presenterWithoutTips.model.getSubscribers()[SubscribersNames.updateThumbView],
    ).toEqual(expect.not.arrayContaining([fn]));
  });
});
