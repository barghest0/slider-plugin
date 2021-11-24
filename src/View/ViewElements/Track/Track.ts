import View from "../../View"

class Track {
    private parentElement:View
		public track:JQuery<HTMLElement>
    constructor(parentElement:View) {
        this.parentElement = parentElement
				this.track = $(".slider__track")
    }
		public createTrack() {
				this.parentElement.parent.append('<div class="slider__track"></div>')		
		}

    }

export default Track
