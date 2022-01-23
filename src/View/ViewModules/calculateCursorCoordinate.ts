import { Direction } from '../../GlobalUtils/interfaces';

const calculateCursorCoordinate = function (coord: number, direction: Direction, root: string, size: number) {
    if (direction === "horizontal") {
        return (coord - $(root).position().left) / size * 100;
    } else {
        return (coord - $(root).position().top) / size * 100;
    }

};

export default calculateCursorCoordinate;