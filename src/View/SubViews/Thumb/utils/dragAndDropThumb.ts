import Thumb from '../Thumb';
import handleThumbDrag from './handleThumbDrag';

function dragAndDropThumb(this: Thumb, stance: number) {
  const DOMthumb = this.thumbs[stance];


  const handlePointerMove = (event: PointerEvent) => {
    handleThumbDrag(event, this, stance);
  };

  const handlePointerDown = (event: PointerEvent | TouchEvent) => {
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
