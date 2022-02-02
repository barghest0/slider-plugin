import Thumb from '../Thumb';
import handleDrag from './handleDrag';

const dragAndDropThumb = function (this: Thumb, stance: number) {

  const handlePointerMove = (e: any) => {
    handleDrag(e, { thisThumb: this, stance });
  };
  const handlePointerDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    document.addEventListener('pointermove', handlePointerMove);
  };
  this.view.DOMroot!.querySelector(`.slider__thumb-${stance}`)!.addEventListener('pointerdown', handlePointerDown);

  document.addEventListener('pointerup', () => {
    document.removeEventListener('pointermove', handlePointerMove);
  });

  this.view.DOMroot!.querySelector(`.slider__thumb-${stance}`)!.addEventListener('touchstart', handlePointerDown);

};

export default dragAndDropThumb;
