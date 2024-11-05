import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderCategoryRating(context, width, time, yCordinate) {
  if (time < 0) return;

  const opacity = interpolateKeyframes(
    [
      { time: 0, value: 0 }, // Start fully transparent
      { time: 2, value: 1 }, // End fully opaque
    ],
    time
  );

  context.save();

  context.globalAlpha = opacity;

  // Define category rating properties
  const boxWidth = 879; // Width of the box
  const boxHeight = 641; // Height of the box in which we want to center text

  const ratingCard = await loadImage('assets/company-summary/category-rating.png');
  context.drawImage(
    ratingCard,
    (width - boxWidth) / 2,
    yCordinate,
    boxWidth,
    boxHeight
  );

  context.fillStyle = '#1E223C';
  context.font = '40px Figtree500';
  context.fillText(
    'Top rating for',
    400,
    yCordinate + 140
  );
  context.fillText(
    'Critically rating for',
    400,
    yCordinate + 450
  );

  context.font = '52px Figtree700';

  context.fillText(
    'Job Security',
    400,
    yCordinate + 140 + 60
  );
  context.fillText(
    'Salary Benefits',
    400,
    yCordinate + 450 + 60
  );

  context.restore();
}
