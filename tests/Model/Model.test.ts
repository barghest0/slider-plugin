import Model from '../../src/components/Model/Model';
import validateStep from '../../src/components/Model/ModelModules/validationParamsMethods/validateStep';
import validateMin from '../../src/components/Model/ModelModules/validationParamsMethods/validateMin';
import validateDecimalPlaces from '../../src/components/Model/ModelModules/validationParamsMethods/validateDecimalPlaces';
import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_THUMB_STANCE,
  MAX_OFFSET,
  MIN_OFFSET,
  SECOND_THUMB_STANCE,
} from '../../src/components/Slider/constants';
import { Directions, Params } from '../../src/components/Slider/types';
import validateFirstThumb from '../../src/components/Model/ModelModules/validationParamsMethods/validateFirstThumb';
import { getValidatedParams } from '../../src/utils/validators';
import { ModelSubscribersNames } from '../../src/components/Observer/types';

describe('Model test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1" ></div>`;
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

  test('check ends validation when first value more than max in horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    model.setOffset(FIRST_THUMB_STANCE, 150);
    model.endsValidation(FIRST_THUMB_STANCE);

    expect(model.getOffset()[FIRST_THUMB_STANCE]).toBe(MAX_OFFSET);
    expect(model.getValue()[FIRST_THUMB_STANCE]).toBe(100);

    model.setParam(Params.direction, Directions.vertical);
    model.setOffset(FIRST_THUMB_STANCE, 150);
    model.endsValidation(FIRST_THUMB_STANCE);

    expect(model.getValue()[FIRST_THUMB_STANCE]).toBe(0);
  });

  test('check ends validation when first value little than min in horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    model.setOffset(FIRST_THUMB_STANCE, -20);
    model.endsValidation(FIRST_THUMB_STANCE);

    expect(model.getOffset()[FIRST_THUMB_STANCE]).toBe(MIN_OFFSET);
    expect(model.getValue()[FIRST_THUMB_STANCE]).toBe(0);

    model.setParam(Params.direction, Directions.vertical);
    model.setOffset(FIRST_THUMB_STANCE, -20);
    model.endsValidation(FIRST_THUMB_STANCE);

    expect(model.getValue()[FIRST_THUMB_STANCE]).toBe(100);
  });

  test('check calculate fill state with value equal 20-40 in horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    model.setParam(Params.value, [20, 40]);
    model.setParam(Params.isRange, true);
    model.setOffset(FIRST_THUMB_STANCE, model.calculateOffset(FIRST_THUMB_STANCE));
    model.setOffset(SECOND_THUMB_STANCE, model.calculateOffset(SECOND_THUMB_STANCE));

    expect(model.calculateFillState()).toEqual({
      fillOffset: 20,
      fillSize: 20,
    });

    model.setParam(Params.direction, Directions.vertical);
    model.setOffset(FIRST_THUMB_STANCE, model.calculateOffset(FIRST_THUMB_STANCE));
    model.setOffset(SECOND_THUMB_STANCE, model.calculateOffset(SECOND_THUMB_STANCE));

    expect(model.calculateFillState()).toEqual({
      fillOffset: 60,
      fillSize: 20,
    });
  });

  test('check calculate fill state with value equal 20 in horizontal/vertical direction', () => {
    model.setParam(Params.direction, Directions.horizontal);
    model.setParam(Params.value, [20]);
    model.setParam(Params.isRange, false);
    model.setOffset(FIRST_THUMB_STANCE, model.calculateOffset(FIRST_THUMB_STANCE));

    expect(model.calculateFillState()).toEqual({
      fillOffset: 0,
      fillSize: 20,
    });

    model.setParam(Params.direction, Directions.vertical);
    model.setOffset(FIRST_THUMB_STANCE, model.calculateOffset(FIRST_THUMB_STANCE));

    expect(model.calculateFillState()).toEqual({
      fillOffset: 0,
      fillSize: 20,
    });
  });

  test('expect notify thumb and fill view after calling updateThumb', () => {
    const subscriberFn = jest.fn();
    model.subscribe(ModelSubscribersNames.updateThumbView, subscriberFn);
    model.subscribe(ModelSubscribersNames.updateFillView, subscriberFn);
    model.subscribe(ModelSubscribersNames.getSliderParams, subscriberFn);
    model.updateThumb(FIRST_THUMB_STANCE, 20);

    expect(subscriberFn).toBeCalledTimes(3);
  });

  test('expect updateThumb called after calling updateThumbAfterTrackClick ', () => {
    const updateThumb = jest.fn();
    model.updateThumb = updateThumb;
    model.updateThumbAfterTrackClick(20);

    expect(updateThumb).toBeCalled();
  });

  test('expect notify fill view after calling updateFill', () => {
    const subscriberFn = jest.fn();
    model.subscribe(ModelSubscribersNames.updateFillView, subscriberFn);
    model.updateFill();

    expect(subscriberFn).toBeCalled();
  });

  test('expect validate and change step to 100 before set step more then delta ends', () => {
    const step = validateStep(200, 0, 100);

    expect(step).toBe(100);
  });

  test('expect validate and change step to 100 before set step less 0', () => {
    const step = validateStep(-10, 0, 100);

    expect(step).toBe(10);
  });

  test('expect validate and change step to 1 before set step equal 0', () => {
    const step = validateStep(0, 0, 100);

    expect(step).toBe(1);
  });

  test('expect min value not be bigger min when step equal 2', () => {
    const min = validateMin(15, 10, 2);

    expect(min).toEqual(8);
  });

  test('expect decimal places not be bigger 3', () => {
    const decimalPlaces = validateDecimalPlaces(231, 3, true);

    expect(decimalPlaces).toEqual(3);
  });

  test('expect decimal places equal 0 if isDecimal equal false', () => {
    const decimalPlaces = validateDecimalPlaces(231, 3, false);

    expect(decimalPlaces).toEqual(0);
  });

  test('expect first thumb value not be less min', () => {
    const value = validateFirstThumb([-10], 0, 20);

    expect(value).toEqual(0);
  });

  test('expect first thumb value not be bigger max', () => {
    const value = validateFirstThumb([30], 0, 20);

    expect(value).toEqual(20);
  });

  test('expect push second thumb if isRange equal true', () => {
    const sliderParams = getValidatedParams({ isRange: true, value: [0] });
    const params = model.validateParams(sliderParams);

    expect(params.value).toEqual([0, 0]);
  });
});
