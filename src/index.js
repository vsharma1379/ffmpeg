import fs from "fs";
import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { Canvas, registerFont } from "canvas";
import { stitchFramesToVideo } from "./utils/stitchFramesToVideo.js";
import { renderMainComposition} from  "./compositions/renderMainComposition.js"


// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

// Clean up the temporary directories first
for (const path of ["out", "tmp/output"]) {
  if (fs.existsSync(path)) {
    await fs.promises.rm(path, { recursive: true });
  }
  await fs.promises.mkdir(path, { recursive: true });
}

// Canvas dimensions
const width = 720;
const height = 1280;

const canvas = new Canvas(width, height);
const context = canvas.getContext("2d");

// The video length and frame rate, as well as the number of frames required
// to create the video
const duration = 6;
const frameRate = 30;
const frameCount = Math.floor(duration * frameRate);

// Render each frame
for (let i = 0; i < frameCount; i++) {
  const time = i / frameRate;

  console.log(
    `Rendering frame ${i} at ${Math.round(time * 10) / 10} seconds...`
  );

  await renderMainComposition(context, width, height, time);

  // Store the image in the directory where it can be found by FFmpeg
  const output = canvas.toBuffer("image/png");
  const paddedNumber = String(i).padStart(4, "0");
  await fs.promises.writeFile(`tmp/output/frame-${paddedNumber}.png`, output);
}

// Stitch all frames together with FFmpeg
await stitchFramesToVideo(
  "tmp/output/frame-%04d.png",
  "assets/company-summary/music.mp3",
  "out/video.mp4",
  duration,
  frameRate
);