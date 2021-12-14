type SubscribeEvent = (data?: any) => void;

interface ISubscribers {
	[key: string]: SubscribeEvent[];
}

interface IEnds {
	min: number;
	max: number;
}
interface ISize {
	width: number;
	height: number;
}

interface IThumbCoords {
	x: number;
	y: number;
}
type Direction = "vertical" | "horizontal";
//user params
interface ISliderParams {
	min: number;
	max: number;
	step: number;
	value: number;
	isRange: boolean;
	direction: Direction;
}
//basic info about current and initial state of slider
interface ISliderState {
	ends:IEnds
	width:number;
	height:number;
	thumbCoords:IThumbCoords
	step: number;
	value: number;
	isRange: boolean;
	direction: Direction;
}

export {
	SubscribeEvent,
	ISubscribers,
	IEnds,
	IThumbCoords,
	ISliderParams,
	Direction,
	ISliderState,
	ISize
};
