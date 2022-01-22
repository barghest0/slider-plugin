import { Direction } from "../../GlobalUtils/interfaces";
import Presenter from "../Presenter";

const clearHTML = function (this: Presenter, direction: Direction) {
	const prevDirection =
		direction === "horizontal" ? "vertical" : "horizontal";
	$(this.root).removeClass(`slider_${prevDirection}`);
	$(this.root).parent().removeClass(`slider-parent_${prevDirection}`);
	$(this.root).html("");
};

export default clearHTML;
