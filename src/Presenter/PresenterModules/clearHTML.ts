import Presenter from "../Presenter";

const clearHTML = function (this: Presenter) {
	const slider = $(`${this.rootClass}`);
	slider.html("");
};

export default clearHTML;
