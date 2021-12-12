type SubscribeEvent = (data?: any) => void;

interface ISubscribers {
	[key: string]: SubscribeEvent[];
}

interface IEnds {
	min: number;
	max: number;
}

interface IThumbCoords {
	x: number;
	y: number;
}
type Direction = "vertical" | "horizontal";

interface ISliderParams {
	min: number;
	max: number;
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
};
