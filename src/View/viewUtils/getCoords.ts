import { IThumbCoords } from "./../../utils/interfaces/interfaces";

const getCoords = (element: JQuery<HTMLElement>): IThumbCoords => {

	return {
		y: element.offset()!.top,
		x: element.offset()!.left,
	};
};

export default getCoords;
