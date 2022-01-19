import Thumb from '../Thumb';


const validateCollision = function (offset: number[], stance: number) {
    if (stance === 0) {
        if (offset[0] > offset[1]) {
            offset[1] = offset[0];
            return true;
        }
    } else {
        if (offset[1] < offset[0]) {
            offset[0] = offset[1];
            return true;
        }
    }
};

export default validateCollision;