import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_VIDEO_DIR = path.resolve(__dirname, 'public/videos');

const VIDEO_COPIES = [
  {
    src: 'C:\\Users\\sugan\\Downloads\\gemini_generated_video_3f76de99.mp4',
    dest: path.join(PUBLIC_VIDEO_DIR, 'hero-main.mp4')
  },
  {
    src: 'C:\\Users\\sugan\\Downloads\\gemini_generated_video_31b033b2.mp4',
    dest: path.join(PUBLIC_VIDEO_DIR, 'hero-video.mp4')
  }
];

// Automatically copy both intro & hotel videos into public/videos for fast browser streaming
try {
  fs.mkdirSync(PUBLIC_VIDEO_DIR, { recursive: true });
  for (const item of VIDEO_COPIES) {
    if (fs.existsSync(item.src) && !fs.existsSync(item.dest)) {
      fs.copyFileSync(item.src, item.dest);
    }
  }
} catch {
  // Ignore if source files are unavailable
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
