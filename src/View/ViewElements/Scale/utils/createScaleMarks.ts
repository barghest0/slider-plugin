import { Direction } from "../../../../Interfaces/interfaces";



const createScaleMarks = (step:number,max:number,min:number)=>{



    $('.slider__scale').append('<div class="slider__scale-marks"></div>')
    for (let i = 0; i <= max; i+=step*2) {
        const stepCount = (max - min) / i
        const stepPercent = 100 / stepCount;
        $('.slider__scale-marks').append(`<div class="slider__scale-mark" style="left:${stepPercent}%"></div>`)
    }
}


export default createScaleMarks