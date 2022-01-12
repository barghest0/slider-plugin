import { Direction } from "../../Interfaces/interfaces";
import Presenter from "../Presenter";

const clearHTML = function (this: Presenter, direction: Direction) {
	const prevDirection =
		direction === "horizontal" ? "vertical" : "horizontal";
	$(this.root).removeClass(`slider-${prevDirection}`);

	$(this.root).html("");
};

export default clearHTML;
