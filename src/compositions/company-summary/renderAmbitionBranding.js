import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderAmbitionBranding(context, width, time) {
  const ambitionboxLogo = await loadImage(
    'assets/company-summary/ambitionbox-logo.svg'
  );

  const opacity = interpolateKeyframes(
    [
      { time: 0, value: 0 }, // Start fully transparent
      { time: 1.5, value: 1 }, // End fully opaque
    ],
    time
  );

  context.globalAlpha = opacity;

  const poweredBy = 'Powered by';
  context.font = '20px Arial';
  const poweredByMetrics = context.measureText('Powered by');
  const poweredByWidth = poweredByMetrics.width;
  const poweredByHeight =
    poweredByMetrics.actualBoundingBoxAscent +
    poweredByMetrics.actualBoundingBoxDescent;

  context.fillStyle = '#000';
  context.fillText(poweredBy, (width - poweredByWidth) / 2, 1000);

  context.drawImage(
    ambitionboxLogo,
    (width - 166) / 2,
    1000 + poweredByHeight,
    166,
    43
  );
}
