import { loadImage } from 'canvas';
import { renderAmbitionBranding } from './renderAmbitionBranding.js';
import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { renderPopularRole } from './renderPopularRole.js';

export async function scene4(context, width, height, time, scene3Bg) {
  if (time < 0) return;

  const background = await loadImage(`assets/company-summary/${scene3Bg}`);
  context.drawImage(background, 0, 0, width, height);

  await renderAmbitionBranding(context, width, time);

  context.font = '84px Figtree700';
  renderAnimatedTextDownToUp(
    context,
    'How much does',
    '#5670FB',
    (width - context.measureText('How much does').width) / 2,
    180,
    time
  );
  renderAnimatedTextDownToUp(
    context,
    'company pay for',
    '#5670FB',
    (width - context.measureText( 'company pay for').width) / 2 + 30,
    280,
    time - 0.15
  );
  renderAnimatedTextDownToUp(
    context,
    'popular roles?',
    '#5670FB',
    (width - context.measureText('popular roles?').width) / 2 + 30,
    380,
    time - 0.25
  );

  const role1 = 'avatar1.png';
  await renderPopularRole(context, width, time - 1, 170, 640, role1, '₹4.8 - 12 Lakh/yr', 'System Engineer', '2-6 years of exp');

  const role2 = 'avatar2.png';
  await renderPopularRole(context, width, time - 2, 170, 940, role2, '₹4.8 - 15 Lakh/yr', 'Business Analyst', '2-6 years of exp');

  const role3 = 'avatar3.png';
  await renderPopularRole(context, width, time - 3, 170, 1240, role3, '₹5 - 12 Lakh/yr', 'IT Analyst', '2-6 years of exp');

}
