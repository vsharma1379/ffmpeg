import { interpolateKeyframes } from '../utils/interpolateKeyframes.js';

export function renderAnimatedText(canvas,context, text, font, x, y, time) {


  if (time < 0) {
    return;
  }

  context.save();

  const blockWidth = 400;
  const blockHeight = 200;
  const blockX = canvas.width / 2;
  const blockY = canvas.height / 2;
  const angle = -15 * (Math.PI / 180); // 15 degrees in radians

  // Calculate opacity using interpolateKeyframes
  const opacity = interpolateKeyframes([
    { time: 0, value: 0 },
    { time: 1, value: 1 }
  ], time);

  // Set opacity
  context.globalAlpha = opacity;

  // Transform for tilt
  context.translate(blockX, blockY);
  context.rotate(angle);

  // Draw block
  context.fillStyle = 'rgba(0, 0, 0, 0.7)';
  context.fillRect(-blockWidth / 2, -blockHeight / 2, blockWidth, blockHeight);

  // Draw text in the center
  context.font = 'bold 36px Arial';
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 0, 0);

  context.restore();
}
