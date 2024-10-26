import { interpolateKeyframes } from '../utils/interpolateKeyframes.js';

export function renderAnimatedText(canvas,context, text, font, x, y, time) {


  if (time < 0) {
    return;
  }

  context.save();

  context.font = font;
  context.fillStyle = 'black';



  // Measure how the dimensions of the text
  const textMetrics = context.measureText(text);
  const textWidth = textMetrics.width;

  const fontHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
  const startX = 0; // Start from off-screen on the left
const endX = (canvas.width - textWidth) / 2; // End at center of canvas





  // Interpolate the y position of the text from 0 to the font size
  const xOffset = interpolateKeyframes([
    { time: 0, value: startX },
    { time: 1, value: endX, easing: 'expo-out' },
  ], time);

  console.log(xOffset)
  const yPosition = (canvas.height + fontHeight) / 2;

  // Clip to the bounding box of the text
  // context.beginPath();
  // context.rect(x, y - textMetrics.actualBoundingBoxAscent, textMetrics.width, fontHeight);
  // context.clip();

  // Draw the text
  //context.fillText(text, x, y + offset);
  context.fillText(text, xOffset, yPosition);

  context.restore();
}
