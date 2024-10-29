import fs from 'fs';
import { stitchFramesToVideo } from '../../utils/stitchFramesToVideo.js';
import { renderMainComposition } from './renderMainComposition.js';

export const createCompanySummaryVideo = async (canvas, context, width, height) => {

  // Clean up the temporary directories first
  for (const path of ['out/company-summary', 'tmp/output/company-summary']) {
    if (fs.existsSync(path)) {
      await fs.promises.rm(path, { recursive: true });
    }
    await fs.promises.mkdir(path, { recursive: true });
  }

  // The video length and frame rate, as well as the number of frames required
  // to create the video
  const duration = 6;
  const frameRate = 24;
  const frameCount = Math.floor(duration * frameRate);

  // Render each frame
  for (let i = 0; i < frameCount; i++) {
    const time = i / frameRate;

    console.log(
      `Rendering frame ${i} at ${Math.round(time * 10) / 10} seconds...`
    );

    await renderMainComposition(context, width, height, time);

    // Store the image in the directory where it can be found by FFmpeg
    const output = canvas.toBuffer('image/png');
    const paddedNumber = String(i).padStart(4, '0');
    await fs.promises.writeFile(
      `tmp/output/company-summary/frame-${paddedNumber}.png`,
      output
    );
  }

  // Stitch all frames together with FFmpeg
  await stitchFramesToVideo(
    'tmp/output/company-summary/frame-%04d.png',
    'assets/company-summary/music.mp3',
    'out/company-summary/video.mp4',
    duration,
    frameRate
  );
};
