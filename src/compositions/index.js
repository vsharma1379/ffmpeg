import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { Canvas, registerFont } from "canvas";
import {createCompanySummaryVideo} from './company-summary/index.js';


// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

// Canvas dimensions
const width = 1080;
const height = 1920;

const canvas = new Canvas(width, height);
const context = canvas.getContext("2d");

// Load fonts so we can use them for drawing
registerFont('assets/fonts/Figtree-Regular.ttf', { family: 'Figtree400' });
registerFont('assets/fonts/Figtree-Medium.ttf', { family: 'Figtree500' });
registerFont('assets/fonts/Figtree-SemiBold.ttf', { family: 'Figtree600' });
registerFont('assets/fonts/Figtree-Bold.ttf', { family: 'Figtree700' });

createCompanySummaryVideo(canvas, context, width, height);