import { loadImage } from 'canvas';
import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { renderCompetitors } from './renderCompetitors/index.js';

export async function scene7(context, width, height, time, scene3Bg) {
  if (time < 0) return;

  const background = await loadImage(`assets/company-summary/${scene3Bg}`);
  context.drawImage(background, 0, 0, width, height);

  context.font = '80px Figtree700';
  context.textBaseline = 'top';
  renderAnimatedTextDownToUp(
    context,
    'Competitor',
    '#5670FB',
    (width - context.measureText('Competitor').width) / 2,
    140,
    time
  );

  renderAnimatedTextDownToUp(
    context,
    'Benchmarking',
    '#5670FB',
    (width - context.measureText('Benchmarking').width) / 2,
    240,
    time - 0.15
  );

  await renderCompetitors(context, time - 1.5, 120, 448);
}
