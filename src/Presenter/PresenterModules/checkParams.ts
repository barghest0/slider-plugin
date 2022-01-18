import { SliderParams, UserSliderParams } from "../../Interfaces/interfaces";


const checkParams = function(params:UserSliderParams):SliderParams{
    let {
        min = 0,
        max = 100,
        step = 10,
        value = [0,100],
        isRange = false,
        direction = "horizontal",
        hasFill = true,
        hasTips = true,
        hasScale = true,
        isDecimal = false,
        decimalPlaces = 0
    } = params
    if (value[0]<min) value[0] = min
    else if(value[1]>max)value[1]=max
    
    return {
        min,
        max,
        step,
        value,
        isRange,
        direction,
        hasFill,
        hasTips,
        hasScale,
        isDecimal,
        decimalPlaces
    }
}

export default checkParams