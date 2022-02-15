import View from '../../../src/View/View';
import Track from '../../../src/View/ViewElements/Track/Track';
import { Directions, SubscribersNames } from '../../../src/utils/interfaces';

describe('Track test', () => {
  document.body.innerHTML =
    '<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const track = new Track(view);
  const fn = jest.fn();
  track.createTrack(Directions.horizontal);
  track.clickTrack();

  test('is DOM track instance of HTMLElement test', () => {
    expect(track.track).toBeInstanceOf(HTMLElement);
  });

  test('correct track model notify before click track test', () => {
    track.subscribe(SubscribersNames.updateThumbBeforeTrackClick, fn);
    track.subscribe(SubscribersNames.updateFill, fn);
    jest.spyOn(track, 'notify');
    root.dispatchEvent(new MouseEvent('pointerdown'));
    expect(track.notify).toBeCalled();
  });
});
