import { Direction } from "../../Interfaces/interfaces";
import View from "../View";
import updateThumbPosition from '../ViewElements/Thumb/utils/updateThumbPosition';

const initialThumbPlacement = function (
	this: View,
	stance: number
) {
	updateThumbPosition.call(this.thumbView, stance, this.thumbView.offset);
};

export default initialThumbPlacement;
