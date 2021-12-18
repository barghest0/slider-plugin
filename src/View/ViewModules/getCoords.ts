import { ICoords } from "../../Interfaces/interfaces"

const getCoords = (thumb: JQuery<HTMLElement>): ICoords => {
	return {
		x: thumb.position()!.left,
		y: thumb.position()!.top,
	}
}

export default getCoords
