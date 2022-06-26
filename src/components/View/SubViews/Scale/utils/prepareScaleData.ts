import { MAX_PERCENTS } from 'components/Slider/constants';
import { Direction, Directions } from 'components/Slider/types';

import {
  MAX_MULTIPLIER,
  MIN_MULTIPLIER,
  PRIMES,
  SCALE_NUMBER_DECIMAL_PLACES,
} from '../constants';

function getDelimiter(dividend: number, delimiters: number[]): number {
  for (const delimiter of delimiters) {
    const remainder = Math.round((dividend % delimiter) / 2) * 2;
    if (remainder === 0) return delimiter;
    if (remainder >= 0) return delimiter + remainder;
  }
  return 1;
}

function prepareScaleData(
  min: number,
  max: number,
  step: number,
  direction: Direction,
) {
  const size = Math.round((max - min) / step + 1);
  const lastIndex = size - 1;

  const delimiter = getDelimiter(lastIndex, PRIMES);

  let multiplier = Math.max(Math.floor(lastIndex / delimiter), MIN_MULTIPLIER);
  const isLessThenMaxMultiplier = multiplier < MAX_MULTIPLIER;
  multiplier = isLessThenMaxMultiplier
    ? Math.min(multiplier, delimiter)
    : multiplier;

  const range = Math.abs(max - min);
  const marksCount = Math.ceil(size / multiplier);
  const lastMark = marksCount - 1;

  const areGapsBiggerMarksCount = Math.floor(range / step) > marksCount;

  const gapSize = areGapsBiggerMarksCount
    ? Math.round(Math.round(range / step) / lastMark) * step
    : step;

  const values = new Array(marksCount).fill(null).map((_, index) => {
    let value = min + gapSize * index;

    value = Math.min(value, max);
    if (index === lastMark) value = max;
    return Number(value.toFixed(SCALE_NUMBER_DECIMAL_PLACES));
  });

  const offsets = new Array(marksCount).fill(null).map((_, index) => {
    let offset = Math.abs(gapSize / range) * index * MAX_PERCENTS;
    offset = Math.min(MAX_PERCENTS, offset);
    if (index === lastMark) offset = MAX_PERCENTS;
    if (direction === Directions.vertical)
      offset = Math.abs(MAX_PERCENTS - offset);
    return Number(offset.toFixed(SCALE_NUMBER_DECIMAL_PLACES));
  });

  const scaleData = {
    values,
    offsets,
  };

  return scaleData;
}

export default prepareScaleData;
