import {
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  FIRST_VALUE,
  MAIN_CLASS,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
  SECOND_VALUE,
  DEFAULT_SLIDER_PARAMS,
} from 'components/Slider/constants';
import { Directions, Params } from 'components/Slider/types';
import Presenter from 'components/Presenter/Presenter';
import {
  ModelSubscribersNames,
  ViewSubscribersNames,
} from 'components/Observer/types';
import { getValidatedParams } from 'utils/validators';
import 'plugin/plugin';

describe('Presenter test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const root = '#slider-1';
  const DOMroot = <HTMLElement>document.querySelector(root);
  const DOMparent = <HTMLElement>DOMroot.parentElement;
  const params = getValidatedParams({ isRange: true, value: [0, 100] });
  const presenter = new Presenter(params, DOMroot, DOMparent);

  beforeAll(() => {
    presenter.init();
  });

  beforeEach(() => {
    presenter.setParams(DEFAULT_SLIDER_PARAMS);
  });

  test('constructor test', () => {
    expect(presenter).toHaveProperty('view');
  });

  test('expect horizontal modifier', () => {
    expect(presenter.DOMroot.classList).toContain(
      `${MAIN_CLASS}_${Directions.horizontal}`,
    );
  });

  test('expect change thumb offset to 80 after notify model when drag first thumb', () => {
    presenter.view.thumbView.setActiveStance(FIRST_THUMB_STANCE);
    presenter.view.thumbView.setCursorOffset(80);
    presenter.view.thumbView.notify(ViewSubscribersNames.updateThumb);

    expect(presenter.model.getOffset()[FIRST_OFFSET]).toBe(80);
  });

  test('expect change thumb offset to 90 after notify model when drag second thumb', () => {
    presenter.view.thumbView.setActiveStance(SECOND_THUMB_STANCE);
    presenter.view.thumbView.setCursorOffset(90);
    presenter.view.thumbView.notify(ViewSubscribersNames.updateThumb);

    expect(presenter.model.getOffset()[SECOND_OFFSET]).toBe(90);
  });

  test('expect change thumb offset to 90 after notify model when click track closer to first thumb', () => {
    presenter.model.setFillState({ fillOffset: 30, fillSize: 30 });
    presenter.model.setOffset(FIRST_THUMB_STANCE, 20);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 50);
    presenter.view.trackView.setCursorOffset(90);
    presenter.view.trackView.notify(
      ViewSubscribersNames.updateThumbAfterTrackClick,
    );

    expect(presenter.model.getOffset()[SECOND_OFFSET]).toBe(90);
  });

  test('expect change thumb offset to 90 after notify model when click track closer to second thumb', () => {
    presenter.model.setFillState({ fillOffset: 30, fillSize: 30 });
    presenter.model.setOffset(FIRST_THUMB_STANCE, 20);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 50);
    presenter.view.trackView.setCursorOffset(10);
    presenter.view.trackView.notify(
      ViewSubscribersNames.updateThumbAfterTrackClick,
    );

    expect(presenter.model.getOffset()[FIRST_OFFSET]).toBe(10);
  });

  test('expect change thumb value to 100 and offset to 50 after notify view when drag first thumb', () => {
    presenter.model.setValue(FIRST_THUMB_STANCE, 100);
    presenter.model.setOffset(FIRST_THUMB_STANCE, 50);
    presenter.model.setActiveStance(FIRST_THUMB_STANCE);
    presenter.model.notify(ModelSubscribersNames.updateThumbView);

    expect(presenter.view.getValue()[FIRST_VALUE]).toBe(100);
    expect(presenter.view.thumbView.getOffset()[FIRST_OFFSET]).toBe(50);
    expect(presenter.view.thumbView.getActiveStance()).toBe(FIRST_THUMB_STANCE);
  });

  test('expect change thumb value to 150 and offset to 70 after notify view when drag second thumb', () => {
    presenter.model.setValue(SECOND_THUMB_STANCE, 150);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 70);
    presenter.model.setActiveStance(SECOND_THUMB_STANCE);
    presenter.model.notify(ModelSubscribersNames.updateThumbView);

    expect(presenter.view.getValue()[SECOND_VALUE]).toBe(150);
    expect(presenter.view.thumbView.getOffset()[SECOND_OFFSET]).toBe(70);
    expect(presenter.view.thumbView.getActiveStance()).toBe(
      SECOND_THUMB_STANCE,
    );
  });

  test('expect change tip value to 50 after notify view when drag first thumb', () => {
    presenter.model.setValue(FIRST_THUMB_STANCE, 50);
    presenter.model.setOffset(FIRST_THUMB_STANCE, 50);
    presenter.model.notify(ModelSubscribersNames.updateThumbView);

    expect(presenter.view.getValue()[FIRST_VALUE]).toBe(50);
  });

  test('expect change tip value to 100 after notify view when drag second thumb', () => {
    presenter.model.setValue(SECOND_THUMB_STANCE, 100);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 100);
    presenter.model.notify(ModelSubscribersNames.updateThumbView);

    expect(presenter.view.getValue()[SECOND_VALUE]).toBe(100);
  });

  test('expect change fill size to 30 and offset to 30 after notify model when drag two thumbs', () => {
    presenter.view.thumbView.setActiveStance(FIRST_THUMB_STANCE);
    presenter.view.thumbView.setCursorOffset(30);
    presenter.view.thumbView.notify(ViewSubscribersNames.updateThumb);
    presenter.view.thumbView.setActiveStance(SECOND_THUMB_STANCE);
    presenter.view.thumbView.setCursorOffset(60);
    presenter.view.thumbView.notify(ViewSubscribersNames.updateThumb);

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
    presenter.model.notify(ModelSubscribersNames.updateFillView);

    expect(presenter.view.fillView.getState().fillSize).toBe(30);
    expect(presenter.view.fillView.getState().fillOffset).toBe(30);
  });

  test('correct clear HTML', () => {
    presenter.model.setParam(Params.direction, Directions.horizontal);
    presenter.clearHTML();

    expect(presenter.DOMroot.classList).not.toContain(
      `${MAIN_CLASS}_${Directions.vertical}`,
    );
  });

  test('correct unsubscribe', () => {
    presenter.unsubscribe();

    expect(
      presenter.view.thumbView.getSubscribers()[
        ViewSubscribersNames.updateThumb
      ],
    ).toEqual([]);
  });

  const paramsWithoutTips = getValidatedParams({
    isRange: true,
    value: [0, 100],
    hasTips: false,
  });
  const presenterWithoutTips = new Presenter(
    paramsWithoutTips,
    DOMroot,
    DOMparent,
  );
  presenterWithoutTips.init();

  test('correct unsubscribe without tips', () => {
    const updateTipView = jest.fn();
    presenter.updateTipView = updateTipView;
    presenterWithoutTips.unsubscribe();

    expect(
      presenterWithoutTips.model.getSubscribers()[
        ModelSubscribersNames.updateThumbView
      ],
    ).toEqual(expect.not.arrayContaining([updateTipView]));
  });
});
