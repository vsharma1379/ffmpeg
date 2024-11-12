import { loadImage } from 'canvas';
import { interpolateKeyframes } from '../../utils/interpolateKeyframes.js';

export async function renderAnimatedBlockLeftToRight(
  context,
  width,
  time,
  companyName
) {
  const parentBoxWidth = 905;
  const parentBoxHeight = 374;

  const translateX = (width - parentBoxWidth) / 2;

  // Calculate the progress of the animation from 0 to 1
  const t = interpolateKeyframes(
    [
      // At time 0, we want x to be 100
      { time: 0, value: -parentBoxWidth },
      // At time 1.5, we want x to be 550 (using Cubic easing)
      { time: 0.75, value: translateX, easing: 'cubic-in-out' },
    ],
    time
  );

  const boxY = 300;
  const starHeight = 40;

  const logoContainerWidth = 320, logoContainerHeight =  276;

  const paddingTb = 52, paddingLr = 42; // Padding around the box
  const gap = 20; // Space between image and text

  // Parent container box
  const logoPlaceholder = await loadImage(
    `assets/company-summary/logo-placeholder.png`
  );
  context.drawImage(logoPlaceholder, t, boxY, parentBoxWidth, parentBoxHeight);

  const companyLogo = await loadImage(
    'assets/company-summary/logo-rgb-black.png'
  );

  /**  Position image in center of the box */
  // Calculate aspect ratios
  const imgAspectRatio = companyLogo.width / companyLogo.height;
  const boxAspectRatio = logoContainerWidth / logoContainerHeight;

  // Determine dimensions to fit the image within the box (contain)
  let drawWidth, drawHeight;
  if (imgAspectRatio > boxAspectRatio) {
    // Image is wider than the box, fit width and adjust height
    drawWidth = logoContainerWidth;
    drawHeight = logoContainerHeight / imgAspectRatio;
  } else {
    // Image is taller than or equal in aspect ratio to the box, fit height and adjust width
    drawHeight = logoContainerHeight;
    drawWidth = logoContainerWidth * imgAspectRatio;
  }

  // Calculate the position to center the image in the box
  const offsetX = (logoContainerWidth - drawWidth) / 2;
  const offsetY = (logoContainerHeight - drawHeight) / 2;

  // Draw the image to fit within the box with centering
  context.drawImage(
    companyLogo,
    t + paddingLr + offsetX,
    boxY + paddingTb + offsetY + starHeight,
    drawWidth,
    drawHeight
  );

  // Draw text on the right side of the image
  context.font = '72px Figtree700';
  context.fillStyle = '#FFFFFF';

  const textX = t + paddingLr + logoContainerWidth + gap; // Position text after the image
  const textY = boxY + paddingTb + logoContainerHeight / 2 + starHeight; // Center text vertically with the image

  context.textBaseline = 'middle';
  context.fillText(companyName, textX, textY);
}
