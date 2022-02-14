import Model from '../../src/Model/Model';
import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from '../../src/utils/constants';
import {
  Directions,
  Params,
  SubscribersNames,
} from '../../src/utils/interfaces';

describe('Model test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const root = '.slider-1';
  const DOMroot = <HTMLElement>document.querySelector(root);
  const model = new Model(DOMroot);
  model.setParams(DEFAULT_SLIDER_PARAMS);
  test('correct set/get default params', () => {
    expect(model.getParams()).toEqual(DEFAULT_SLIDER_PARAMS);
  });

  test('correct set/get 400 size', () => {
    model.setSize(400);
    expect(model.getSize()).toEqual(400);
  });

  test('correct set/get 20 value', () => {
    model.setValue(FIRST_THUMB_STANCE, 20);
    expect(model.getValue()[FIRST_THUMB_STANCE]).toEqual(20);
  });

  test('correct set/get 20 offset', () => {
    model.setOffset(FIRST_THUMB_STANCE, 20);
    expect(model.getOffset()[FIRST_THUMB_STANCE]).toEqual(20);
  });

  test('check calculate thumb offset with value equal 20', () => {
    model.setValue(FIRST_THUMB_STANCE, 20);
    expect(model.calculateOffset(FIRST_THUMB_STANCE)).toBe(20);
  });

  test('correct set/get fillSize equal 20, fillOffset equal 20', () => {
    const fillState = { fillOffset: 20, fillSize: 20 };
    model.setFillState(fillState);
    expect(model.getFillState()).toEqual(fillState);
  });

  test('correct calculate step percent', () => {
    expect(model.calculateStepPercent()).toBe(10);
  });

  test('correct calculate value percent', () => {
    expect(model.calculateValue(50, 10)).toBe(50);
  });

  test('check prepareOffset with horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    expect(model.prepareOffset(100)).toBe(100);
    model.setParam(Params.direction, Directions.vertical);
    expect(model.prepareOffset(100)).toBe(0);
  });

  test('check calculate fill state with value equal 20-40 and horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    model.setParam(Params.value, [20, 40]);
    model.setParam(Params.isRange, true);
    model.setOffset(
      FIRST_THUMB_STANCE,
      model.calculateOffset(FIRST_THUMB_STANCE),
    );
    model.setOffset(
      SECOND_THUMB_STANCE,
      model.calculateOffset(SECOND_THUMB_STANCE),
    );

    expect(model.calculateFillState()).toEqual({
      fillOffset: 20,
      fillSize: 20,
    });

    model.setParam(Params.direction, Directions.vertical);
    model.setOffset(
      FIRST_THUMB_STANCE,
      model.calculateOffset(FIRST_THUMB_STANCE),
    );
    model.setOffset(
      SECOND_THUMB_STANCE,
      model.calculateOffset(SECOND_THUMB_STANCE),
    );
    expect(model.calculateFillState()).toEqual({
      fillOffset: 60,
      fillSize: 20,
    });
  });

  test('check calculate fill state with value equal 20 and horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    model.setParam(Params.value, [20]);
    model.setParam(Params.isRange, false);
    model.setOffset(
      FIRST_THUMB_STANCE,
      model.calculateOffset(FIRST_THUMB_STANCE),
    );
    expect(model.calculateFillState()).toEqual({
      fillOffset: 0,
      fillSize: 20,
    });

    model.setParam(Params.direction, Directions.vertical);
    model.setOffset(
      FIRST_THUMB_STANCE,
      model.calculateOffset(FIRST_THUMB_STANCE),
    );
    expect(model.calculateFillState()).toEqual({
      fillOffset: 0,
      fillSize: 20,
    });
  });

  test('expect notify thumb view after calling updateThumb', () => {
    const subscriberFn = jest.fn();
    model.subscribe(SubscribersNames.updateFillView, subscriberFn);
    model.subscribe(SubscribersNames.updateTipView, subscriberFn);
    model.subscribe(SubscribersNames.updateThumbView, subscriberFn);
    model.subscribe(SubscribersNames.updateValues, subscriberFn);
    model.updateThumb(FIRST_THUMB_STANCE, 20);
    expect(subscriberFn).toBeCalledTimes(4);
  });

  test('expect updateThumb called after calling updateThumbBeforeTrackClick ', () => {
    const updateThumb = jest.fn();
    model.updateThumb = updateThumb;
    model.updateThumbBeforeTrackClick(20);
    expect(updateThumb).toBeCalled();
  });

  test('expect notify fill view after calling updateFill', () => {
    const subscriberFn = jest.fn();
    model.subscribe(SubscribersNames.updateFillView, subscriberFn);
    model.updateFill();
    expect(subscriberFn).toBeCalled();
  });
});
