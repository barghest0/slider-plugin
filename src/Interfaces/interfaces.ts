type SubscribeEvent = (...data: any[]) => void;

interface Subscribers {
	[key: string]: SubscribeEvent[];
}

interface Ends {
	min: number;
	max: number;
}

type Direction = "vertical" | "horizontal";
//user params
interface SliderParams {
	[index: string]: number | string | boolean | any;
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
	onChange?:(params:SliderParams)=>void
}


interface UserSliderParams {
	[index: string]: number | string | boolean | any;
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
	onChange?:(params:SliderParams)=>void
}
//basic info about current and initial state of slider
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
};
