import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  FIRST_VALUE,
  MAIN_CLASS,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
  SECOND_VALUE,
} from '../../src/constants/slider';
import {
  Directions,
  InitMods,
  SubscribersNames,
} from '../../src/@types/slider';
import Presenter from '../../src/Presenter/Presenter';
import validateParams from '../../src/Presenter/PresenterModules/validateParams';
import validateStep from '../../src/Presenter/PresenterModules/validationParamsMethods/validateStep';
import validateValue from '../../src/Presenter/PresenterModules/validationParamsMethods/validateValue';
import validateMin from '../../src/Presenter/PresenterModules/validationParamsMethods/validateMin';
import validateDecimalPlaces from '../../src/Presenter/PresenterModules/validationParamsMethods/validateDecimalPlaces';

describe('Presenter test', () => {
  document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
  const root = '.slider-1';
  const DOMroot = <HTMLElement>document.querySelector(root);
  const params = JSON.parse(JSON.stringify(DEFAULT_SLIDER_PARAMS));
  params.isRange = true;
  const presenter = new Presenter(root, validateParams(params, DOMroot));

  const updateValues = jest.fn();
  presenter.init(params, InitMods.init);
  presenter.model.subscribe(SubscribersNames.updateValues, updateValues);

  test('constructor test', () => {
    expect(presenter).toHaveProperty('view');
  });

  test('correct set/get model default params', () => {
    presenter.setModelState(params);
    expect(presenter.model.getParams()).toEqual(params);
  });

  test('correct set/get view default params', () => {
    presenter.setModelState(params);
    presenter.setViewState();
    expect(presenter.view.getParams()).toEqual(params);
  });

  test('expect horizontal modifier', () => {
    expect(
      presenter.DOMroot.classList.contains(`${MAIN_CLASS}_horizontal`),
    ).toBeTruthy();
  });

  test('expect change thumb offset to 80 after notify model when drag first thumb', () => {
    presenter.view.thumbView.notify(
      SubscribersNames.updateThumb,
      FIRST_THUMB_STANCE,
      80,
    );
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
    presenter.view.trackView.notify(
      SubscribersNames.updateThumbBeforeTrackClick,
      90,
    );
    expect(presenter.model.getOffset()[SECOND_OFFSET]).toBe(90);
  });

  test('expect change thumb offset to 90 after notify model when click track closer to second thumb', () => {
    presenter.model.setFillState({ fillOffset: 30, fillSize: 30 });
    presenter.model.setOffset(FIRST_THUMB_STANCE, 20);
    presenter.model.setOffset(SECOND_THUMB_STANCE, 50);
    presenter.view.trackView.notify(
      SubscribersNames.updateThumbBeforeTrackClick,
      10,
    );
    expect(presenter.model.getOffset()[FIRST_OFFSET]).toBe(10);
  });

  test('expect change thumb value to 100 and offset to 50 after notify view when drag first thumb', () => {
    presenter.model.notify(
      SubscribersNames.updateThumbView,
      FIRST_THUMB_STANCE,
      100,
      50,
    );
    expect(presenter.view.thumbView.getValue()[FIRST_VALUE]).toBe(100);
    expect(presenter.view.thumbView.getOffset()[FIRST_OFFSET]).toBe(50);
    expect(presenter.view.thumbView.activeStance).toBe(FIRST_THUMB_STANCE);
  });

  test('expect change thumb value to 150 and offset to 70 after notify view when drag second thumb', () => {
    presenter.model.notify(
      SubscribersNames.updateThumbView,
      SECOND_THUMB_STANCE,
      150,
      70,
    );
    expect(presenter.view.thumbView.getValue()[SECOND_VALUE]).toBe(150);
    expect(presenter.view.thumbView.getOffset()[SECOND_OFFSET]).toBe(70);
    expect(presenter.view.thumbView.activeStance).toBe(SECOND_THUMB_STANCE);
  });

  test('expect change tip value to 50 and offset to 50 after notify view when drag first thumb', () => {
    presenter.model.notify(
      SubscribersNames.updateTipView,
      FIRST_THUMB_STANCE,
      50,
      50,
    );
    expect(presenter.view.tipView.getValue()[FIRST_VALUE]).toBe(50);
    expect(presenter.view.tipView.getOffset()[FIRST_OFFSET]).toBe(50);
  });

  test('expect change tip value to 100 and offset to 100 after notify view when drag second thumb', () => {
    presenter.model.notify(
      SubscribersNames.updateTipView,
      SECOND_THUMB_STANCE,
      100,
      100,
    );
    expect(presenter.view.tipView.getValue()[SECOND_VALUE]).toBe(100);
    expect(presenter.view.tipView.getOffset()[SECOND_OFFSET]).toBe(100);
  });

  test('expect change fill size to 30 and offset to 30 after notify model when drag two thumbs', () => {
    presenter.view.thumbView.notify(
      SubscribersNames.updateThumb,
      FIRST_THUMB_STANCE,
      30,
    );
    presenter.view.thumbView.notify(
      SubscribersNames.updateThumb,
      SECOND_THUMB_STANCE,
      60,
    );
    presenter.view.thumbView.notify(SubscribersNames.updateFill);
    expect(presenter.model.getFillState()).toEqual({
      fillOffset: 30,
      fillSize: 30,
    });
  });

  test('expect change fill size to 30 and offset to 30 after notify view when', () => {
    presenter.model.notify(SubscribersNames.updateFillView, {
      fillSize: 30,
      fillOffset: 30,
    });
    expect(presenter.view.fillView.getSize()).toBe(30);
    expect(presenter.view.fillView.getOffset()).toBe(30);
  });

  test('expect calling onChange after notify view', () => {
    const onChange = jest.fn();
    presenter.params.onChange = onChange;
    presenter.model.notify(
      SubscribersNames.updateThumbView,
      SECOND_THUMB_STANCE,
      150,
      70,
    );
    expect(presenter.params.onChange).toBeDefined();
  });

  test('correct clear HTML', () => {
    presenter.clearHTML(Directions.horizontal);
    expect($(presenter.root).hasClass(`${MAIN_CLASS}_vertical`)).toBe(false);
    presenter.clearHTML(Directions.vertical);
    expect($(presenter.root).hasClass(`${MAIN_CLASS}_horizontal`)).toBe(false);
  });

  test('expect validate and change step to 100 before set step more then delta ends', () => {
    const step = validateStep(200, 0, 100);
    expect(step).toBe(100);
  });

  test('expect validate and change step to 100 before set step less 0', () => {
    const step = validateStep(-10, 0, 100);
    expect(step).toBe(10);
  });

  test('expect validate and push number value to array for interaction in view and model', () => {
    const value = validateValue(3);
    expect(value).toEqual([3]);
  });


  test('expect  min value not be bigger min when step equal 2', () => {
    const min = validateMin(15, 10, 2);
    expect(min).toEqual(8);
  });

  test('expect decimal places not be  bigger 3', () => {
    const decimalPlaces = validateDecimalPlaces(231, 3);
    expect(decimalPlaces).toEqual(3);
  });
});
