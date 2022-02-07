import Fill from "../Fill";

const updateFill = function (this: Fill) {
	if (this.view.isRange) {
		this.fill.style[this.view.offsetDirection] = `${this.getOffset()}%`;
		this.fill.style[this.view.fillDirection] = `${this.getSize()}%`;
	} else {
		this.fill.style[this.view.fillDirection] = `${this.getSize()}%`;
	}
};

export default updateFill;
