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
	min: number;
	max: number;
	step: number;
	value: number | number[];
	isRange: boolean;
	direction: Direction;
	hasFill: boolean;
	hasTips: boolean;
}
//basic info about current and initial state of slider
interface ISliderTrackState {
	ends: IEnds;
	size: number;
	isRange: boolean;
	direction: Direction;
}

interface ISliderThumbState {
	step: number;
	value: number;
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
