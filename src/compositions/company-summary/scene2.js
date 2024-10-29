import { renderAnimatedTextDownToUp } from '../renderAnimatedTextDownToUp.js';
import { loadImage } from 'canvas';

export async function scene2(
  context,
  width,
  height,
  time,
  scene2Bg,
  companyName
) {
  if (time > 0 && time <= 3) {
    // Clear the canvas with a white background color. This is required as we are reusing the canvas with every frame
    // context.fillStyle = '#ffffff';
    // context.fillRect(0, 0, width, height);
    const background = await loadImage(
      `assets/company-summary/${scene2Bg}.png`
    );
    context.drawImage(background, 0, 0, width, height);

    context.font = 'bold 68px Arial';

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
      220,
      time - 0.5
    );

    if (time - 1 > 0) {
      const foundIn = await loadImage('assets/company-summary/founded-in.png');
      context.drawImage(foundIn, 0, 0, width, height);
    }

    if (time - 1.5 > 0) {
      const headquarter = await loadImage(
        'assets/company-summary/headquarter.png'
      );
      context.drawImage(headquarter, 0, 0, width, height);
    }

    if (time - 2 > 0) {
      const employees = await loadImage('assets/company-summary/employees.png');
      context.drawImage(employees, 0, 0, width, height);
    }

    if (time - 2.5 > 0) {
      const keyFocus = await loadImage('assets/company-summary/key-focus.png');
      context.drawImage(keyFocus, 0, 0, width, height);
    }
  }
}
