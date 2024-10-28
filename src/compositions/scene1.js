import { renderAnimatedBlockLeftToRight } from "./renderAnimatedBlockLeftToRight.js";
import { renderAnimatedTextDownToUp } from "./renderAnimatedTextDownToUp.js";
import { renderAmbitionBranding } from "./renderAmbitionBranding.js";
import { interpolateKeyframes } from "../utils/interpolateKeyframes.js";

export async function scene1(context, width, time, companyName) {

  await renderAmbitionBranding(context, width, time);

  await renderAnimatedBlockLeftToRight(context, width, time, companyName);

  context.font = "bold 68px Arial";
  
  renderAnimatedTextDownToUp(
    context,
    "IS THIS THE RIGHT",
    "#5670FB",
    (width - context.measureText("IS THIS THE RIGHT").width) / 2,
    600,
    time,
    0,
    1.5
  );
  renderAnimatedTextDownToUp(
    context,
    "FIT FOR YOU?",
    "#5670FB",
    (width - context.measureText("FIT FOR YOU?").width) / 2 + 30,
    680,
    time,
    0,
    1.5
  );

  // context.font = "40px Arial";
  // context.fillStyle = '#000000';
  // const text = "Here's everything you need to know";
  // const textMetrics = context.measureText(text);
  // const fontWidth = textMetrics.width;
  // const fontHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
  // context.fillText(text, (width - fontWidth) / 2, 750);
  // context.fillStyle = "#000000";

  // const t = interpolateKeyframes(
  //   [
  //     { time: 1.5, value: 0 },
  //     // At time 3, we want x to be 200 (using Cubic easing)
  //     { time: 2.5, value: fontWidth, easing: "cubic-in-out" },
  //   ],
  //   time
  // );

  // context.fillRect((width - fontWidth) / 2, 750 - textMetrics.actualBoundingBoxAscent, t, fontHeight);

}
