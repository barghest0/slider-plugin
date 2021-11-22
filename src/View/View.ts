import Thumb from './ViewElements/Thumb/Thumb'
import Track from './ViewElements/Track/Track'
import Observer from '../Observer/Observer'

class View extends Observer {
	private thumb:any
	private track:any
	constructor(sliderClass: string) {
		super()
		this.thumb = new Thumb(this)
		this.track = new Track(this)
	}


}

export default View
