import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderFourBlocksInCompanyAtAGlance(context, width, height, time) {
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
  
        const foundIn = await loadImage('assets/company-summary/founded-in.png');
        context.drawImage(foundIn, 0, 0, width, height);
  
        context.fillStyle = '#FFFFFF';
        context.font = 'bold 28px Arial';
        context.fillText('Founded in', 80, 420);
  
        context.font = 'bold 44px Arial';
        context.fillText('1968', 100, 470);
  
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
        context.drawImage(headquarter, 0, 0, width, height);
  
        context.fillStyle = '#FFFFFF';
        context.font = 'bold 28px Arial';
        context.fillText('Headquarters', 330, 540);
  
        context.font = 'bold 44px Arial';
        context.fillText('Mumbai', 350, 590);
  
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
  
        const employees = await loadImage('assets/company-summary/employees.png');
        context.drawImage(employees, 0, 0, width, height);
  
        context.fillStyle = '#FFFFFF';
        context.font = 'bold 28px Arial';
        context.fillText('Employee Count', 100, 720);
  
        context.font = 'bold 44px Arial';
        context.fillText('200-300', 120, 770);
  
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
        context.drawImage(keyFocus, 0, 0, width, height);
  
        context.fillStyle = '#FFF';
        context.font = 'bold 28px Arial';
        context.fillText('Key Focus in', 330, 870);
  
        context.font = 'bold 44px Arial';
        context.fillText('Pharmacy', 350, 920);
  
        context.restore();
      }
}