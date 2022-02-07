import { Direction } from '../../../utils/interfaces';
import View from '../../View';
import createScaleMarks from './utils/createScaleMarks';

class Scale {
	public scale: HTMLElement;

	public view: View;

	public createScaleMarks: (step: number, max: number, min: number, direction: Direction) => void;

	constructor(view: View) {
		this.view = view;
		this.scale = <HTMLElement>document.querySelector('.slider__scale');
		this.createScaleMarks = createScaleMarks.bind(this);
	}

	public createScale(direction: Direction) {
		const scale = document.createElement('div');
		scale.classList.add('slider__scale');
		scale.classList.add(`slider__scale_${direction}`);
		scale.dataset.testid = `test-scale`;
		this.scale = scale;
		this.view.DOMroot.appendChild(scale);
	}
}

export default Scale;
