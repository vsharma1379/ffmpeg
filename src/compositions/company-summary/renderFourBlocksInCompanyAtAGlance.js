import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderFourBlocksInCompanyAtAGlance(
  context,
  width,
  height,
  time
) {
  if (time - 1 > 0) {
    const opacity = interpolateKeyframes(
      [
        { time: 0, value: 0 }, // Start fully transparent
        { time: 1, value: 1 }, // End fully opaque
      ],
      time - 1
    );

    context.save();

    context.globalAlpha = opacity;

    const angle = -(Math.PI / 180) * 3; // Rotate 10 degrees (in radians)
    context.rotate(angle); // Rotate by the specified angle

    const foundIn = await loadImage('assets/company-summary/founded-in.png');
    context.drawImage(foundIn, 80, 480, 365, 255);

    context.fillStyle = '#FFFFFF';
    context.font = '40px Figtree600';
    context.fillText('Founded in', 120, 600);

    context.font = '60px Figtree700';
    context.fillText('1968', 170, 665);

    context.restore();
  }

  if (time - 2 > 0) {
    const opacity = interpolateKeyframes(
      [
        { time: 0, value: 0 }, // Start fully transparent
        { time: 1, value: 1 }, // End fully opaque
      ],
      time - 2
    );

    context.save();

    context.globalAlpha = opacity;

    const headquarter = await loadImage(
      'assets/company-summary/headquarter.png'
    );
    context.drawImage(headquarter, 400, 650, 581, 348);

    context.fillStyle = '#FFFFFF';
    context.font = '40px Figtree600';
    context.fillText('Headquarters', 510, 800);

    context.font = '60px Figtree700';
    context.fillText('Mumbai', 530, 865);

    context.restore();
  }

  if (time - 3 > 0) {
    const opacity = interpolateKeyframes(
      [
        { time: 0, value: 0 }, // Start fully transparent
        { time: 1, value: 1 }, // End fully opaque
      ],
      time - 3
    );

    context.save();

    context.globalAlpha = opacity;

    const angle = -(Math.PI / 180) * 3; // Rotate 10 degrees (in radians)
    context.rotate(angle); // Rotate by the specified angle

    const employees = await loadImage('assets/company-summary/employees.png');
    context.drawImage(employees, 40, 900, 442, 316);

    context.fillStyle = '#FFFFFF';
    context.font = '40px Figtree600';
    context.fillText('Employee Count', 70, 1060);

    context.font = '60px Figtree700';
    context.fillText('200-300', 110, 1125);

    context.restore();
  }

  if (time - 4 > 0) {
    const opacity = interpolateKeyframes(
      [
        { time: 0, value: 0 }, // Start fully transparent
        { time: 1, value: 1 }, // End fully opaque
      ],
      time - 4
    );

    context.save();

    context.globalAlpha = opacity;

    const keyFocus = await loadImage('assets/company-summary/key-focus.png');
    context.drawImage(keyFocus, 420, 1100, 605, 344);

    context.fillStyle = '#FFF';
    context.font = '40px Figtree600';
    context.fillText('Key Focus in', 530, 1260);

    context.font = '60px Figtree700';
    context.fillText('Pharmacy', 520, 1325);

    context.restore();
  }
}
