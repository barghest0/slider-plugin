import Thumb from '../Thumb';
import handleDrag from './handleDrag';

function dragAndDropThumb(this: Thumb, stance: number) {
	const DOMthumb = this.thumbs[stance];

	const handlePointerMove = (e: any) => {
		handleDrag(e, this, stance);
	};

	const handlePointerDown = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		document.addEventListener('pointermove', handlePointerMove);
	};

	DOMthumb.addEventListener('pointerdown', handlePointerDown);

	DOMthumb.addEventListener('touchstart', handlePointerDown);

	document.addEventListener('pointerup', () => {
		document.removeEventListener('pointermove', handlePointerMove);
	});
}

export default dragAndDropThumb;
