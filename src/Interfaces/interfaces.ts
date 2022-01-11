type SubscribeEvent = (...data: any) => void;

interface ISubscribers {
	[key: string]: SubscribeEvent[];
}

interface IEnds {
	min: number;
	max: number;
}

interface ICoords {
	x: number;
	y: number;
}
type Direction = "vertical" | "horizontal";
//user params
interface ISliderParams {
	[index: string | number]: number | string | boolean | any;
	min: number;
	max: number;
	step: number;
	value: any;
	isRange: boolean;
	direction: Direction;
	hasFill: boolean;
	hasTips: boolean;
	hasScale: boolean;
	isDecimal: boolean;
	decimalPlaces: number;
}
//basic info about current and initial state of slider
interface ISliderTrackState {
	ends: IEnds;
	size: number;
	isRange: boolean;
	direction: Direction;
	hasFill: boolean;
	hasTips: boolean;
	hasScale: boolean;
}

interface ISliderThumbState {
	step: number;
	value: number;
	isDecimal: boolean;
	decimalPlaces: number;
	stepCount: number;
	stepPercent: number;
	offset: number;
	stepOffset: number;
}
interface ISliderFillState {
	fillOffset: number;
	fillSize: number;
}
export {
	SubscribeEvent,
	ISubscribers,
	IEnds,
	ICoords,
	ISliderParams,
	Direction,
	ISliderTrackState,
	ISliderThumbState,
	ISliderFillState,
};
