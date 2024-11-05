import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderRatingCard(context, width, time, yCordinate) {
  if (time < 0) return;

  const opacity = interpolateKeyframes(
    [
      { time: 0, value: 0 }, // Start fully transparent
      { time: 1, value: 1 }, // End fully opaque
    ],
    time
  );

  context.save();

  context.globalAlpha = opacity;

  // Define rating card properties
  const rating = `${3.7}/5`;
  const boxWidth = 667; // Width of the box
  const boxHeight = 310; // Height of the box in which we want to center text

  const ratingCard = await loadImage('assets/company-summary/rating-card.png');
  context.drawImage(
    ratingCard,
    (width - boxWidth) / 2,
    yCordinate,
    boxWidth,
    boxHeight
  );

  context.fillStyle = '#FFFFFF';
  context.font = '168px Figtree700';
  context.textBaseline = 'middle';

  const textMetrics = context.measureText(rating);
  const textHeight =
    textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

  // Calculate Y position for centered text
  const centerY =
    yCordinate +
    (boxHeight - textHeight) / 2 +
    textMetrics.actualBoundingBoxAscent;

  context.fillText(
    rating,
    (width - context.measureText(rating).width) / 2,
    centerY
  );

  context.restore();
}
