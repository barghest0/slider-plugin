import Observer from "../Observer/Observer";
import { IEnds } from "../utils/interfaces/interfaces";

class Model extends Observer {
	private sliderClass: string;
	private minMax: IEnds;
	private step: number;
	private value: number;
	private height: number;
	private width: number;

	constructor(sliderClass: string) {
		super();
		this.sliderClass = sliderClass;
		this.step = 1;
		this.minMax = { min: 1, max: 100 };
		this.value = 0;
		this.height = 0;
		this.width = 0;
	}

	public setStep(step: number) {
		this.step = step;
	}

	public setEnds({ min, max }: IEnds) {
		this.minMax = { min, max };
	}
	public setValue(value: number) {
		this, (value = value);
	}
	public updateModel(...args: any) {
		const {  value } = args;
		this.value = value;
	}
	public getState() {
		return {
			minMax: this.minMax,
			step: this.step,
			value: this.value,
			width: this.width,
			height: this.height,
		};
	}
	public setSize(size: any) {
		this.height = size.height;
		this.width = size.width;
	}
}

export default Model;
