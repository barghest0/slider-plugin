import Thumb from '../Thumb';

function dragAndDropThumb(this: Thumb, stance: number) {
  const DOMthumb = this.thumbs[stance];

  const handlePointerMove = (event: PointerEvent) => {
    this.handleThumbDrag(event, stance);
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
