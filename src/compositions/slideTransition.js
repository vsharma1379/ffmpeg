import { interpolateKeyframes } from "../utils/interpolateKeyframes.js";

export function slideTransition(context, width, height, time) {
  if (time < 0) return;

  context.fillStyle = "#5670FB";

  const t = interpolateKeyframes(
    [
      { time: 0, value: 0 },
      { time: 0.5, value: width, easing: "cubic-in-out" },
      { time: 1, value: 0 },
    ],
    time
  );

  context.fillRect(time < 0.5 ? 0 : width - t, 0, t, height);
}
