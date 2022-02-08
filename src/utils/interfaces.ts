type SubscribeEvent = (...data: any[]) => void;

interface Subscribers {
	[key: string]: SubscribeEvent[];
}

interface Ends {
	min: number;
	max: number;
}

type Direction = 'vertical' | 'horizontal';
type OffsetDirection = 'left' | 'top';
type FillDirection = 'width' | 'height';

interface SliderParams {
	[index: string]: any;
	min: number;
	max: number;
	step: number;
	value: number[];
	isRange: boolean;
	direction: Direction;
	hasFill: boolean;
	hasTips: boolean;
	hasScale: boolean;
	isDecimal: boolean;
	decimalPlaces: number;
	onChange?: (params: SliderParams) => void;
}

interface UserSliderParams {
	[index: string]: any;
	min?: number;
	max?: number;
	step?: number;
	value?: number[] | number;
	isRange?: boolean;
	direction?: Direction;
	hasFill?: boolean;
	hasTips?: boolean;
	hasScale?: boolean;
	isDecimal?: boolean;
	decimalPlaces?: number;
	onChange?: (params: SliderParams) => void;
}

interface SliderTrackState {
	ends: Ends;
	size: number;
	isRange: boolean;
	direction: Direction;
	hasFill: boolean;
	hasTips: boolean;
	hasScale: boolean;
}

interface SliderThumbState {
	step: number;
	value: number;
	isDecimal: boolean;
	decimalPlaces: number;
	stepCount: number;
	stepPercent: number;
	offset: number;
	stepOffset: number;
}
interface SliderFillState {
	fillOffset: number;
	fillSize: number;
}

enum SubscribersNames {
	updateThumbModel = 'UpdateThumbModel',
	updateTrackFillModel = 'UpdateTrackFillModel',
	updateThumbModelBeforeTrackClick = 'UpdateThumbModelBeforeTrackClick',
	updateTipView = 'UpdateTipView',
	updateThumbView = 'UpdateThumbView',
	updateTrackFillView = 'UpdateTrackFillView',
	updatePanelValues = 'UpdatePanelValues',
}

export {
	SubscribeEvent,
	Subscribers,
	Ends,
	SliderParams,
	UserSliderParams,
	Direction,
	SliderTrackState,
	SliderThumbState,
	SliderFillState,
	SubscribersNames,
	FillDirection,
	OffsetDirection,
};
