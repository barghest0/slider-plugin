type SubscribeEvent = (data?: any) => void;

interface ISubscribers {
	[key: string]: SubscribeEvent[];
}

interface ISliderState {
	min: number;
	max: number;
	step: number;
}

interface IHorizontalSliderCoords {
		left:number,
		width:number
}

export { SubscribeEvent, ISubscribers, ISliderState, IHorizontalSliderCoords };
