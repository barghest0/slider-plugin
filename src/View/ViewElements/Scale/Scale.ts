import { SCALE_CLASS } from '../../../utils/constants';
import { Direction } from '../../../utils/interfaces';
import View from '../../View';
import createScaleMarks from './utils/createScaleMarks';

class Scale {
	public scale: HTMLElement;

	public view: View;

	public createScaleMarks: (step: number, max: number, min: number, direction: Direction) => void;

	constructor(view: View) {
		this.view = view;
		this.scale = <HTMLElement>document.querySelector(`.${SCALE_CLASS}`);
		this.createScaleMarks = createScaleMarks.bind(this);
	}

	public createScale(direction: Direction) {
		const scale = document.createElement('div');
		scale.classList.add(SCALE_CLASS);
		scale.classList.add(`${SCALE_CLASS}_${direction}`);
		scale.dataset.testid = `test-scale`;
		this.scale = scale;
		this.view.DOMroot.appendChild(scale);
	}
}

export default Scale;
