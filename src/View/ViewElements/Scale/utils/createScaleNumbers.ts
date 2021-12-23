import { Direction } from "../../../../Interfaces/interfaces";



const createScaleNumbers = (step:number,max:number)=>{

    const marksCount = max/(step/2)
    $('.slider__scale').append('<div class="slider__scale-numbers"></div>')
    for (let i = 0; i <= max; i+=marksCount) {
        $('.slider__scale-numbers').append(`<div class="slider__scale-number">${i}</div>`)
        
        
    }
}


export default createScaleNumbers