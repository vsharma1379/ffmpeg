import { loadImage } from "canvas";
import { drawRoundedRect } from "../utils/drawRoundedRect.js";
import { interpolateKeyframes } from "../utils/interpolateKeyframes.js";

export async function renderAnimatedBlockLeftToRight(
  context,
  width,
  time,
  companyName
) {
  // Define canvas dimensions
  const logoContainerSize = 170;

  const padding = 20; // Padding around the box
  const gap = 20; // Space between image and text

  const parentBoxWidth = 600;
  const parentBoxHeight = logoContainerSize + 2 * padding;

  const translateX = (width - parentBoxWidth) / 2;

  // Calculate the progress of the animation from 0 to 1
  const t = interpolateKeyframes(
    [
      // At time 0, we want x to be 100
      { time: 0, value: -parentBoxWidth },
      // At time 1.5, we want x to be 550 (using Cubic easing)
      { time: 1.5, value: translateX, easing: "cubic-in-out" },
      // At time 3, we want x to be 200 (using Cubic easing)
      { time: 3, value: translateX, easing: "cubic-in-out" },
    ],
    time
  );

  const boxY = 200;

  // Parent container box
  context.fillStyle = "#5670FB";
  drawRoundedRect(context, t, boxY, parentBoxWidth, parentBoxHeight, 16);

  // Add white background container for logo of 100 x 100
  context.fillStyle = "#FFFFFF";
  drawRoundedRect(
    context,
    t + padding,
    boxY + padding,
    logoContainerSize,
    logoContainerSize,
    16
  );

  const companyLogo = await loadImage("assets/company-summary/logo-rgb-black.png");

  /**  Position image in center of the box */
  // Calculate aspect ratios
  const imgAspectRatio = companyLogo.width / companyLogo.height;
  const boxAspectRatio = logoContainerSize / logoContainerSize;

  // Determine dimensions to fit the image within the box (contain)
  let drawWidth, drawHeight;
  if (imgAspectRatio > boxAspectRatio) {
    // Image is wider than the box, fit width and adjust height
    drawWidth = logoContainerSize;
    drawHeight = logoContainerSize / imgAspectRatio;
  } else {
    // Image is taller than or equal in aspect ratio to the box, fit height and adjust width
    drawHeight = logoContainerSize;
    drawWidth = logoContainerSize * imgAspectRatio;
  }

  // Calculate the position to center the image in the box
  const offsetX = (logoContainerSize - drawWidth) / 2;
  const offsetY = (logoContainerSize - drawHeight) / 2;

  // Draw the image to fit within the box with centering
  context.drawImage(
    companyLogo,
    t + padding + offsetX,
    boxY + padding + offsetY,
    drawWidth,
    drawHeight
  );

  // Draw text on the right side of the image
  context.font = "bold 56px Arial";
  context.fillStyle = "#FFFFFF";

  const textX = t + padding + logoContainerSize + gap; // Position text after the image
  const textY = boxY + padding + logoContainerSize / 2; // Center text vertically with the image

  context.textBaseline = "middle";
  context.fillText(companyName, textX, textY);
}
