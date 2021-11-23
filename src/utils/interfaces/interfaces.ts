type SubscribeEvent = (data?: any) => void;

interface ISubscribers {
	[key: string]: SubscribeEvent[];
}

interface ISliderState {
	min: number;
	max: number;
	step: number;
}

export { SubscribeEvent, ISubscribers, ISliderState };
