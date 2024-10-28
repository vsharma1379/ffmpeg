import { renderAnimatedTextDownToUp } from "./renderAnimatedTextDownToUp.js";

export async function scene2(context, width, time, companyName) {

  context.font = "bold 68px Arial";

  renderAnimatedTextDownToUp(
    context,
    companyName,
    "#000000",
    (width - context.measureText(companyName).width) / 2,
    140,
    time,
  );

  renderAnimatedTextDownToUp(
    context,
    "At a glance",
    "#5670FB",
    (width - context.measureText("At a glance").width) / 2 + 30,
    220,
    time - 0.5,
  );
}
