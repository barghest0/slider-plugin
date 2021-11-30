import {IHorizontalSliderCoords} from "../../../../utils/interfaces/interfaces";

const getCoords = (element: JQuery<HTMLElement>):IHorizontalSliderCoords => {
		return {
			left:element.offset()!.left,
			width: element.outerWidth()!,
	}
};

export default getCoords;
