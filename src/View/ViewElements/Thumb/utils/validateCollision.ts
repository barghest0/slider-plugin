import Thumb from '../Thumb';


const validateCollision = function (value: number[],offset:number[], stance: number) {
    if (stance === 0) {
        if (value[0] > value[1]) {
            offset[1] = offset[0];
            return true;
        }
    } else {
        if (value[1] < value[0]) {
            offset[0] = offset[1];
            return true;
        }
    }
};

export default validateCollision;