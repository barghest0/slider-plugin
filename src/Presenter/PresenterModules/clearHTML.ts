import Presenter from "../Presenter";

const clearHTML = function (this: Presenter) {
	const slider = document.querySelector(this.root);
	$(this.root).html("");
};

export default clearHTML;
