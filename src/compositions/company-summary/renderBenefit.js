import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderBenefit(
  context,
  width,
  time,
  xCordinate,
  yCordinate,
  image,
  compensation,
  role
) {
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

  // Define category rating properties
  const boxWidth = 233; // Width of the box
  const boxHeight = 228; // Height of the box in which we want to center text

  const avatar = await loadImage(`assets/company-summary/${image}`);
  context.drawImage(avatar, xCordinate, yCordinate, boxWidth, boxHeight);

  context.fillStyle = '#1E223C';
  context.textBaseline = 'top';
  context.font = '40px Figtree700';
  context.fillText(
    compensation,
    xCordinate + boxWidth / 2 - context.measureText(compensation).width / 2,
    yCordinate + boxHeight + 20
  );

  context.font = '28px Figtree400';
  context.fillText(
    role,
    xCordinate + boxWidth / 2 - context.measureText(role).width / 2,
    yCordinate + boxHeight + 20 + 48 + 12
  );

  context.restore();
}
