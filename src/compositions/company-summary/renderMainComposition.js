import { scene1 } from './scene1.js';
import { scene2 } from './scene2.js';
import { scene3 } from './scene3.js';
import { scene4 } from './scene4.js';
import { scene5 } from './scene5.js';
import { scene6 } from './scene6.js';
import { slideTransition } from './slideTransition.js';

export async function renderMainComposition(context, width, height, time) {
  const companyName = 'TCS';

  const scene1Bg = 'background1';
  await scene1(context, width, height, time, scene1Bg, companyName); // 4 sec

  const scene2Bg = 'background2.jpg';
  slideTransition(context, width, height, time - 4, scene2Bg); // 0.5 sec
  await scene2(context, width, height, time - 4.5, scene2Bg, companyName); // 6 sec

  const scene3Bg = 'background3.jpg';
  slideTransition(context, width, height, time - 10.5, scene3Bg); // 0.5 sec
  await scene3(context, width, height, time - 11, scene3Bg); // 6 sec

  const scene4Bg = 'background4.jpg';
  slideTransition(context, width, height, time - 17, scene4Bg); // 0.5 sec
  await scene4(context, width, height, time - 17.5, scene4Bg); // 6 sec

  const scene5Bg = 'background5.png';
  slideTransition(context, width, height, time - 23.5, scene5Bg); // 0.5 sec
  await scene5(context, width, height, time - 24, scene5Bg); // 8 sec

  const scene6Bg = 'background6.png';
  slideTransition(context, width, height, time - 32, scene6Bg); // 0.5 sec
  await scene6(context, width, height, time - 32.5, scene6Bg); // 8 sec
}
