import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderAmbitionBranding(context, width, time) {
  const ambitionboxLogo = await loadImage(
    'assets/company-summary/ambitionbox-logo.png'
  );

  const opacity = interpolateKeyframes(
    [
      { time: 0, value: 0 }, // Start fully transparent
      { time: 1.5, value: 1 }, // End fully opaque
    ],
    time
  );

  context.globalAlpha = opacity;

  const logoWidth = 473 * 0.75;
  const logoHeight = 150 * 0.75;

  context.drawImage(
    ambitionboxLogo,
    (width - logoWidth) / 2,
    1640,
    logoWidth,
    logoHeight
  );
}
