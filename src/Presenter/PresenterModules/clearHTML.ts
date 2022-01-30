import { Direction } from "../../utils/interfaces";
import Presenter from "../Presenter";

const clearHTML = function (this: Presenter, direction: Direction) {
	const prevDirection =
		direction === "horizontal" ? "vertical" : "horizontal";
	this.DOMroot.classList.remove(`slider_${prevDirection}`);
	this.DOMroot.parentElement?.classList.remove(`slider-parent_${prevDirection}`);
	this.DOMroot.innerHTML = '';
};

export default clearHTML;
