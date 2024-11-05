import { renderAmbitionBranding } from './renderAmbitionBranding.js';
import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { loadImage } from 'canvas';
import { renderFourBlocksInCompanyAtAGlance } from './renderFourBlocksInCompanyAtAGlance.js';

export async function scene2(
  context,
  width,
  height,
  time,
  scene2Bg,
  companyName
) {
  if (time > 0 && time <= 6) {
    // Clear the canvas with a white background color. This is required as we are reusing the canvas with every frame
    // context.fillStyle = '#ffffff';
    // context.fillRect(0, 0, width, height);
    const background = await loadImage(
      `assets/company-summary/${scene2Bg}`
    );
    context.drawImage(background, 0, 0, width, height);
    
    await renderAmbitionBranding(context, width, time);

    context.font = '84px Figtree700';

    renderAnimatedTextDownToUp(
      context,
      companyName,
      '#000000',
      (width - context.measureText(companyName).width) / 2,
      140,
      time
    );

    renderAnimatedTextDownToUp(
      context,
      'At a glance',
      '#5670FB',
      (width - context.measureText('At a glance').width) / 2 + 30,
      230,
      time - 0.5
    );

    await renderFourBlocksInCompanyAtAGlance(context, width, height, time);
  }
}
