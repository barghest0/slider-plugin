import Observer from "../Observer/Observer";
import { IEnds } from "../utils/interfaces/interfaces";

class Model extends Observer {
	private sliderClass:string
	private minMax: IEnds;
	private step: number;

	constructor(sliderClass:string) {
		super();
		this.sliderClass = sliderClass;
		this.step = 1
		this.minMax = {min:1,max:100}
	}

	public setStep(this:Model,step:number){
		this.step = step
	}

	public setEnds(this:Model,{min,max}:IEnds){
		this.minMax = {min,max}
	}

}

export default Model;
