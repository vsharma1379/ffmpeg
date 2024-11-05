import { scene1 } from './scene1.js';
import { scene2 } from './scene2.js';
import { scene3 } from './scene3.js';
import { slideTransition } from './slideTransition.js';

export async function renderMainComposition(context, width, height, time) {
  const companyName = 'TCS';

  const scene1Bg = 'background1';
  await scene1(context, width, height, time, scene1Bg, companyName); // 4 sec

  const scene2Bg = 'background2.jpg';
  slideTransition(context, width, height, time - 4, scene2Bg); // 0.5 sec
  await scene2(context, width, height, time - 4.5, scene2Bg, companyName); // 6 sec

  const scene3Bg = 'background3.jpg';
  slideTransition(context, width, height, time - 10.5, scene2Bg); // 0.5 sec
  await scene3(context, width, height, time - 11, scene3Bg); // 6 sec
}
