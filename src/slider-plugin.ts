import $ from 'jquery';
import slider from './slider-template';
import './Style/slider.scss';

const globalAny: typeof globalThis & { jQuery?: unknown; $?: unknown; } = global;

globalAny.jQuery = $;
globalAny.$ = $;

$.fn.extend({
  slider,
});
