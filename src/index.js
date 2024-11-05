import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import { Canvas, registerFont } from "canvas";
import {createCompanySummaryVideo} from './compositions/company-summary/index.js';


// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

// Canvas dimensions
const width = 1080;
const height = 1920;

const canvas = new Canvas(width, height);
const context = canvas.getContext("2d");

createCompanySummaryVideo(canvas, context, width, height);