import Thumb from './ViewElements/Thumb/Thumb'
import Track from './ViewElements/Track/Track'
import Observer from '../Observer/Observer'

class View extends Observer {
	private thumbView:Thumb
	private trackView:Track
	public trackField:JQuery<HTMLElement>
	constructor(sliderClass: string) {
		super()
		this.thumbView = new Thumb(this)
		this.trackView = new Track(this)
		this.trackField = $(sliderClass)
	}
		public createThumb() {
		this.thumbView.createThumb()	
	}	
		

}

export default View
