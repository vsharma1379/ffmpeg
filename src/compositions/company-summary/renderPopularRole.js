import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderPopularRole(context, width, time, xCordinate, yCordinate, image, compensation, role, exp) {
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
  const boxWidth = 142; // Width of the box
  const boxHeight = 142; // Height of the box in which we want to center text

  const avatar = await loadImage(`assets/company-summary/${image}`);
  context.drawImage(
    avatar,
    xCordinate,
    yCordinate,
    boxWidth,
    boxHeight
  );

  context.fillStyle = '#5670FB'
  context.font = '60px Figtree700';
  context.fillText(
    compensation,
    xCordinate + 180,
    yCordinate + 25,
  );

  context.fillStyle = '#1E223C';
  context.font = '48px Figtree700';
  context.fillText(
    role,
    xCordinate + 180,
    yCordinate + 90
  );

  context.fillStyle = '#1E223C';
  context.font = '36px Figtree700';
  context.fillText(
    exp,
    xCordinate + 180,
    yCordinate + 145
  );

  context.restore();
}
