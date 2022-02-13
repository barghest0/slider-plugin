import { Direction } from '../../../utils/interfaces';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateTipsPosition from './utils/updateTipsPosition';
import { TIP_CLASS } from '../../../utils/constants';

class Tip extends Observer {
	public view: View;

	public updateTipsPosition: (stance: number) => void;

	public tips: HTMLElement[];

	private value: number[];

	private offset: number[];

	constructor(view: View) {
		super();
		this.view = view;
		this.offset = [];
		this.tips = [];
		this.value = [];
		this.updateTipsPosition = updateTipsPosition.bind(this);
	}

	public setOffset(offset: number, stance: number) {
		this.offset[stance] = offset;
	}

	public getOffset() {
		return this.offset;
	}

	public setValue(value: number, stance: number) {
		this.value[stance] = value;
	}

	public getValue() {
		return this.value;
	}

	public createTip(direction: Direction, stance: number) {
		const tip = document.createElement('div');
		tip.classList.add(TIP_CLASS);
		tip.classList.add(`${TIP_CLASS}-${stance}`);
		tip.classList.add(`${TIP_CLASS}_${direction}`);
		tip.dataset.testid = `test-tip`;
		this.tips.push(tip);
		this.view.DOMroot.appendChild(tip);
	}
}

export default Tip;
