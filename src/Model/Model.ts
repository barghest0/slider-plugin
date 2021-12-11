import Observer from "../Observer/Observer";
import { IEnds } from "../utils/interfaces/interfaces";

class Model extends Observer {
	private sliderClass: string;
	private ends: IEnds;
	private step: number;
	private value: number;
	private height: number;
	private width: number;
	private thumbX: number;
	private thumbY: number;
	constructor(sliderClass: string) {
		super();
		this.sliderClass = sliderClass;
		this.step = 1;
		this.ends = { min: 1, max: 100 };
		this.value = 0;
		this.thumbX = 0;
		this.thumbY = 0;
		this.height = 0;
		this.width = 0;
	}

	public setStep(step: number) {
		this.step = step;
	}

	public setEnds({ min, max }: IEnds) {
		this.ends = { min, max };
	}
	public setValue(value: number) {
		this.value = value;
	}
	public setSize(size: any) {
		this.height = size.height;
		this.width = size.width;
	}
	public setCoords({ x, y }: any) {
		this.thumbX = x;
		this.thumbY = y;
	}
	public updateModel(value: number, x: number, y: number) {
		this.setValue(value);
		this.setCoords({ x, y });
		this.notify("UpdateView");
	}

	public getState() {
		return {
			ends: this.ends,
			step: this.step,
			value: this.value,
			width: this.width,
			height: this.height,
			x: this.thumbX,
			y: this.thumbY,
		};
	}
}

export default Model;
