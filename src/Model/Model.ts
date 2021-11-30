import Observer from "../Observer/Observer";
import { ISliderState } from "../utils/interfaces/interfaces";

class Model extends Observer {
	private state: ISliderState;

	constructor(state: ISliderState) {
		super();
		this.state = this.setState(state);
	}

	private setState(state: ISliderState) {
		const { min, max } = { min: state.min, max: state.max };
		const step = state.step;
		return { ...this.state, min, max, step };
	}
}

export default Model;
