import Observer from "../Observer/Observer";

class Model extends Observer {

    state:any

    constructor(state:any) {
        super()
        this.setState(state)
    }

    private setState(state:any){
        const {min, max} = {min: state.min, max: state.max}
        const step = state.step
        this.state = {min,max,step}
    }

}

export default Model