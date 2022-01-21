import Thumb from "../Thumb";

const validateCollision = function (this: Thumb, stance: number) {
	if (stance === 0) {
		if (this.value[0] > this.value[1]) {
			this.setOffset(1, this.offset[0]);
			return true;
		}
	} else {
		if (this.value[1] < this.value[0]) {
			this.setOffset(0, this.offset[1]);
			return true;
		}
	}
	return false;
};

export default validateCollision;
