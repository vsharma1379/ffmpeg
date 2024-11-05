import { renderAnimatedBlockLeftToRight } from './renderAnimatedBlockLeftToRight.js';
import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { renderAmbitionBranding } from './renderAmbitionBranding.js';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';
import { loadImage } from 'canvas';
import { renderTypewriterAnimationText } from '../renderTypewritterAnimationText.js';

export async function scene1(context, width, height, time, scene1Bg, companyName) {
  if (time > 0 && time <= 3) {
    // Clear the canvas with a white background color. This is required as we are reusing the canvas with every frame
    // context.fillStyle = '#ffffff';
    // context.fillRect(0, 0, width, height);
    const background = await loadImage(
      `assets/company-summary/${scene1Bg}.png`
    );
    context.drawImage(background, 0, 0, width, height);

    await renderAmbitionBranding(context, width, time, true);

    await renderAnimatedBlockLeftToRight(context, width, time, companyName);

    context.font = '88px Figtree700';

    renderAnimatedTextDownToUp(
      context,
      'IS THIS THE RIGHT',
      '#5670FB',
      (width - context.measureText('IS THIS THE RIGHT').width) / 2,
      920,
      time,
    );

    context.font = '112px Figtree700';
    renderAnimatedTextDownToUp(
      context,
      'FIT FOR YOU?',
      '#5670FB',
      (width - context.measureText('FIT FOR YOU?').width) / 2 + 30,
      1030,
      time,
    );

    context.font = '48px Figtree400';
    const text = "Here's everything you need to know!";
    renderTypewriterAnimationText(
      null,
      context,
      text,
      '48px Figtree400',
      (width - context.measureText(text).width) / 2,
      1150,
      time - 1
    );

    // context.font = "40px Arial";
    // context.fillStyle = '#000000';
    // const text = "Here's everything you need to know";
    // const textMetrics = context.measureText(text);
    // const fontWidth = textMetrics.width;
    // const fontHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
    // context.fillText(text, (width - fontWidth) / 2, 750);
    // context.fillStyle = "#000000";

    // const t = interpolateKeyframes(
    //   [
    //     { time: 1.5, value: 0 },
    //     // At time 3, we want x to be 200 (using Cubic easing)
    //     { time: 2.5, value: fontWidth, easing: "cubic-in-out" },
    //   ],
    //   time
    // );

    // context.fillRect((width - fontWidth) / 2, 750 - textMetrics.actualBoundingBoxAscent, t, fontHeight);
  }
}
