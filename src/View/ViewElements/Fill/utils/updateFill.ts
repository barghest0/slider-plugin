import Fill from '../Fill';

function updateFill(this: Fill) {
	if (this.view.getParams().isRange) {
		this.fill.style[this.view.offsetDirection] = `${this.getOffset()}%`;
		this.fill.style[this.view.fillDirection] = `${this.getSize()}%`;
	} else {
		this.fill.style[this.view.fillDirection] = `${this.getSize()}%`;
	}
}

export default updateFill;
