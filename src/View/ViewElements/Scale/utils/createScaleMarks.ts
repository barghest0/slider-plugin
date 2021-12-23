import { Direction } from "../../../../Interfaces/interfaces";



const createScaleMarks = (step:number,max:number)=>{

    const marksCount = max/(step/2)
    $('.slider__scale').append('<div class="slider__scale-marks"></div>')
    for (let i = 0; i <= max; i+=marksCount) {
        
        
        
    }
}


export default createScaleMarks