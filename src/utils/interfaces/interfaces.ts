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

interface ISliderParams {
	min: number;
	max: number;
	step: number;
}

export { SubscribeEvent, ISubscribers, IEnds, IThumbCoords, ISliderParams };
