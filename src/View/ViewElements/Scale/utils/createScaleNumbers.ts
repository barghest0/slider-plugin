import { Direction } from "../../../../Interfaces/interfaces";



const createScaleNumbers = (step:number,max:number,min:number)=>{



    $('.slider__scale').append('<div class="slider__scale-numbers"></div>')
    for (let i = 0; i <= max; i+=step*4) {
        const stepCount = (max - min) / i
        const stepPercent = 100 / stepCount;
        $('.slider__scale-numbers').append(`<div class="slider__scale-number" style="left:${stepPercent}%">${i}</div>`)
    }
}


export default createScaleNumbers