import { loadImage } from 'canvas';
import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { renderBenefit } from './renderBenefit.js';
import { renderTypewriterAnimationText } from '../renderTypewritterAnimationText.js';

export async function scene5(context, width, height, time, scene3Bg) {
  if (time < 0) return;

  const background = await loadImage(`assets/company-summary/${scene3Bg}`);
  context.drawImage(background, 0, 0, width, height);

  context.font = '84px Figtree700';
  renderAnimatedTextDownToUp(
    context,
    'What benefits do',
    '#5670FB',
    (width - context.measureText('What benefits do').width) / 2,
    180,
    time
  );
  renderAnimatedTextDownToUp(
    context,
    'employees enjoy',
    '#5670FB',
    (width - context.measureText('employees enjoy').width) / 2 + 30,
    280,
    time - 0.15
  );
  renderAnimatedTextDownToUp(
    context,
    'here?',
    '#5670FB',
    (width - context.measureText('here?').width) / 2 + 30,
    380,
    time - 0.25
  );

  const benefit1Logo = 'health.png';
  await renderBenefit(
    context,
    width,
    time - 1,
    190,
    570,
    benefit1Logo,
    'Health Insurance',
    '58% employees reported'
  );

  const benefit2Logo = 'traning.png';
  await renderBenefit(
    context,
    width,
    time - 2,
    660,
    570,
    benefit2Logo,
    'Professional Training',
    '58% employees reported'
  );

  const benefit3Logo = 'bus.png';
  await renderBenefit(
    context,
    width,
    time - 3,
    190,
    1030,
    benefit3Logo,
    'Shuttle Service',
    '58% employees reported'
  );

  const benefit4Logo = 'meal.png';
  await renderBenefit(
    context,
    width,
    time - 4,
    660,
    1030,
    benefit4Logo,
    'Free Meal',
    '58% employees reported'
  );

  context.font = '60px Figtree400';
  const text = "+12 more";
  renderTypewriterAnimationText(
    null,
    context,
    text,
    '60px Figtree400',
    (width - context.measureText(text).width) / 2,
    1500,
    time - 5.5
  );
}
