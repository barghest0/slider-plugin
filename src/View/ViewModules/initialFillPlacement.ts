import { Direction } from "../../Interfaces/interfaces";
import View from "../View";
import updateFill from '../ViewElements/Fill/utils/updateFill';

const initialFillPlacement = function (this: View, direction: Direction) {
	this.fillView.updateFill(direction);
};

export default initialFillPlacement;
