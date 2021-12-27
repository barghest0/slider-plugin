import Presenter from "../Presenter";

const clearHTML = function (this: Presenter) {
	const slider = $(`${this.sliderClass}`);
	slider.html("");
};

export default clearHTML;
