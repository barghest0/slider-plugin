import { IThumbCoords } from "../../Interfaces/interfaces";

const getCoords = (element: JQuery<HTMLElement>): IThumbCoords => {

	return {
		y: element.offset()!.top,
		x: element.offset()!.left,
	};
};

export default getCoords;
