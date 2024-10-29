import { loadImage } from 'canvas';
import { scene1 } from './scene1.js';
import { slideTransition } from './slideTransition.js';
import { scene2 } from './scene2.js';

export async function renderMainComposition(context, width, height, time) {
  const companyName = 'TCS';

  if (time <= 3) {
    // Clear the canvas with a white background color. This is required as we are reusing the canvas with every frame
    // context.fillStyle = "#ffffff";
    // context.fillRect(0, 0, width, height);
    const background = await loadImage(
      'assets/company-summary/background1.png'
    );
    context.drawImage(background, 0, 0, width, height);
  }

  await scene1(context, width, time, companyName);

  if (time > 3.5 && time <= 6) {
    // context.fillStyle = "#ffffff";
    // context.fillRect(0, 0, width, height);
    const background = await loadImage(
      'assets/company-summary/background2.png'
    );
    context.drawImage(background, 0, 0, width, height);
  }

  slideTransition(context, width, height, time - 3);

  await scene2(context, width, time - 4, companyName);
}
