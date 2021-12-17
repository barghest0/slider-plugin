import Observer from "../Observer/Observer"
import {
    IEnds,
    ISliderThumbState,
} from "../Interfaces/interfaces"

class ThumbModel extends Observer {
    private sliderClass: string
    private step: number
    private value: number | number[]
    private position: number
    private stepCount: number
    private stepPercent: number
    constructor(sliderClass: string, position: number) {
        super()
        this.sliderClass = sliderClass
        this.step = 1
        this.value = 0
        this.position = 0
        this.stepCount = 0
        this.stepPercent = 0
    }

    public setStep(step: number, ends: IEnds) {
        this.step = step
        this.stepCount = (ends.max - ends.min) / step
        this.stepPercent = 100 / this.stepCount
    }

    public setValue(value: number) {
        this.value = value
    }

    public setPosition(position: number) { 
        console.log(position)

        this.position = position
    }

    public updateThumbModel(value: number) {
        this.setValue(value)
        this.notify("UpdateView")
    }

    public getState(): ISliderThumbState {
        return {
            step: this.step,
            value: this.value,
        }
    }
}

export default ThumbModel
