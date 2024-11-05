import { loadImage } from 'canvas';
import { renderAmbitionBranding } from './renderAmbitionBranding.js';
import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { renderRatingCard } from './renderRatingCard.js';
import { renderCategoryRating } from './renderCategoryRating.js';
import { renderTypewriterAnimationText } from '../renderTypewritterAnimationText.js';

export async function scene3(context, width, height, time, scene3Bg) {
  if (time < 0) return;

  const background = await loadImage(`assets/company-summary/${scene3Bg}`);
  context.drawImage(background, 0, 0, width, height);

  await renderAmbitionBranding(context, width, time);

  context.font = '84px Figtree700';
  renderAnimatedTextDownToUp(
    context,
    'How did employees',
    '#5670FB',
    (width - context.measureText('How did employees').width) / 2,
    180,
    time
  );
  renderAnimatedTextDownToUp(
    context,
    'rate the company?',
    '#5670FB',
    (width - context.measureText('rate the company?').width) / 2 + 30,
    280,
    time - 0.15
  );

  await renderRatingCard(context, width, time - 1, 450);

  context.font = '44px Figtree400';
  const basedOnreviewCount = 'Based on 80k+ employee reviews';
  renderTypewriterAnimationText(
    null,
    context,
    basedOnreviewCount,
    '44px Figtree400',
    (width - context.measureText(basedOnreviewCount).width) / 2,
    450 + 310 + 60,
    time - 2
  );

  await renderCategoryRating(context, width, time - 3, 450 + 310 + 220);
}
