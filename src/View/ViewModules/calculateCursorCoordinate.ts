import { Direction } from '../../GlobalUtils/interfaces';

const calculateCursorCoordinate = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent | JQuery.MouseDownEvent, direction: Direction, root: string, size: number) {
    if (direction === "horizontal") {
        return ((e.pageX || e.touches![0].pageX) - $(root).position().left) / size * 100;
    } else {
        return ((e.pageY || e.touches![0].pageY) - $(root).position().top) / size * 100;
    }

};

export default calculateCursorCoordinate;