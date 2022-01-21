import { Direction } from '../../Interfaces/interfaces';

const calculateCursorCoordinate = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent | JQuery.MouseDownEvent, direction: Direction, root: string) {
    if (direction === "horizontal") {
        return (e.pageX || e.touches![0].pageX) - $(root).position().left;
    } else {
        return (e.pageY || e.touches![0].pageY) - $(root).position().top;
    }

};

export default calculateCursorCoordinate;