import '@testing-library/jest-dom';
import {
	DEFAULT_SLIDER_PARAMS,
	FIRST_OFFSET,
	FIRST_THUMB_STANCE,
	FIRST_VALUE,
	SECOND_OFFSET,
	SECOND_THUMB_STANCE,
	SECOND_VALUE,
} from '../../src/utils/constants';
import { SliderParams, SubscribersNames } from '../../src/utils/interfaces';
import Presenter from '../../src/Presenter/Presenter';
import checkParams from '../../src/Presenter/PresenterModules/validateParams/validateParams';

describe('Presenter test', () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = '.slider-1';
	const DOMroot = <HTMLElement>document.querySelector(root);
	const params: SliderParams = checkParams(
		{
			isRange: true,
			direction: 'vertical',
			value: 10,
		},
		DOMroot,
	);
	const presenter = new Presenter(root, params);
	const fn = jest.fn();
	presenter.init(params, 'init');
	presenter.thumbs.forEach(thumb => {
		thumb.subscribe(SubscribersNames.updateValues, fn);
	});

	test('constructor test', () => {
		expect(presenter).toHaveProperty('view');
	});

	test('correct set model param', () => {
		presenter.setTrackModelState(params);
		expect(presenter.trackModel.isRange).toBe(true);
	});

	test('correct set view param', () => {
		presenter.setViewState();
		expect(presenter.view.isRange).toBe(true);
	});

	test('correct set class test', () => {
		expect($(presenter.root).hasClass('slider_vertical')).toBe(true);
	});

	test('correct set thumb view test', () => {
		expect(presenter.view.thumbView.getValue()[FIRST_VALUE]).toBe(10);
	});

	test('correct update thumb model', () => {
		presenter.view.thumbView.notify(SubscribersNames.updateThumbModel, 0, 80, 'horizontal');
		expect(presenter.thumbs[FIRST_THUMB_STANCE].getOffset()).toBe(80);
	});

	test('correct update track fill model', () => {
		presenter.view.thumbView.notify(SubscribersNames.updateThumbModel, 0, 80, 'horizontal');
		presenter.view.thumbView.notify(SubscribersNames.updateTrackFillModel, 'horizontal');
	});

	test('correct update track fill model before click', () => {
		presenter.view.trackView.notify('UpdateThumbModelBeforeTrackClick', 80);
	});

	test('correct update thumb view', () => {
		presenter.params.onChange = fn;
		presenter.thumbs[FIRST_THUMB_STANCE].notify(
			SubscribersNames.updateThumbView,
			100,
			50,
			FIRST_THUMB_STANCE,
		);
		expect(presenter.view.thumbView.getValue()[FIRST_VALUE]).toBe(100);
		expect(presenter.view.thumbView.getOffset()[FIRST_OFFSET]).toBe(50);
		expect(presenter.view.thumbView.activeStance).toBe(FIRST_THUMB_STANCE);
		presenter.thumbs[1].notify(SubscribersNames.updateThumbView, 150, 70, SECOND_THUMB_STANCE);

		expect(presenter.view.thumbView.getValue()[SECOND_VALUE]).toBe(150);
		expect(presenter.view.thumbView.getOffset()[SECOND_OFFSET]).toBe(70);
		expect(presenter.view.thumbView.activeStance).toBe(SECOND_THUMB_STANCE);

		expect(presenter.params.onChange).toBeDefined();
	});

	test('correct update tip view', () => {
		presenter.thumbs[FIRST_THUMB_STANCE].notify(
			SubscribersNames.updateTipView,
			FIRST_THUMB_STANCE,
			50,
			50,
		);
		presenter.thumbs[SECOND_THUMB_STANCE].notify(
			SubscribersNames.updateTipView,
			SECOND_THUMB_STANCE,
			100,
			100,
		);
		expect(presenter.view.tipView.getOffset()[FIRST_OFFSET]).toBe(50);
		expect(presenter.view.tipView.getOffset()[SECOND_OFFSET]).toBe(100);
	});

	test('correct update track fill view', () => {
		presenter.trackModel.notify(SubscribersNames.updateTrackFillView, 100, 10, 'horizontal');
		expect(presenter.view.fillView.getSize()).toBe(100);
		expect(presenter.view.fillView.getOffset()).toBe(10);
	});

	test('correct check values params', () => {
		expect(checkParams({}, presenter.DOMroot)).toEqual(DEFAULT_SLIDER_PARAMS);
		const correctParams: SliderParams = JSON.parse(JSON.stringify(DEFAULT_SLIDER_PARAMS));

		correctParams.value = [50];
		expect(checkParams({ value: 50 }, presenter.DOMroot)).toEqual(correctParams);

		correctParams.value = [100, 100];
		correctParams.isRange = true;
		expect(checkParams({ value: [100, 50], isRange: true }, presenter.DOMroot)).toEqual(
			correctParams,
		);

		correctParams.value = [50, 50];
		correctParams.isRange = true;
		expect(checkParams({ value: 50, isRange: true }, presenter.DOMroot)).toEqual(correctParams);
	});

	test('correct check params min max restrictions', () => {
		const correctParams: SliderParams = JSON.parse(JSON.stringify(DEFAULT_SLIDER_PARAMS));
		correctParams.value = [0, 100];
		correctParams.max = 100;
		correctParams.isRange = true;
		expect(checkParams({ value: [0, 200], max: 100, isRange: true }, presenter.DOMroot)).toEqual(
			correctParams,
		);

		correctParams.value = [50, 100];
		correctParams.min = 50;
		correctParams.isRange = true;
		expect(checkParams({ value: [0, 100], min: 50, isRange: true }, presenter.DOMroot)).toEqual(
			correctParams,
		);
	});

	test('correct check onChange param', () => {
		const correctParams: SliderParams = JSON.parse(JSON.stringify(DEFAULT_SLIDER_PARAMS));
		correctParams.onChange = fn;
		expect(checkParams({ onChange: fn }, presenter.DOMroot)).toEqual(correctParams);
	});

	test('correct clear HTML', () => {
		presenter.clearHTML('horizontal');
		expect($(presenter.root).hasClass('slider_vertical')).toBe(false);
		presenter.clearHTML('vertical');
		expect($(presenter.root).hasClass('slider_horizontal')).toBe(false);
	});
});
