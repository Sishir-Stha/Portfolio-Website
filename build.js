import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set environment variable to disable native binaries
process.env.ROLLUP_SKIP_NATIVE = 'true';

// Remove problematic Rollup binary if it exists
const rollupPath = path.join(__dirname, 'node_modules', '@rollup', 'rollup-linux-x64-gnu');
if (fs.existsSync(rollupPath)) {
  console.log('Removing problematic Rollup binary...');
  fs.rmSync(rollupPath, { recursive: true, force: true });
}

// Also remove the native.js file that's causing the issue
const nativeJsPath = path.join(__dirname, 'node_modules', 'rollup', 'dist', 'native.js');
if (fs.existsSync(nativeJsPath)) {
  console.log('Removing problematic native.js file...');
  fs.rmSync(nativeJsPath, { force: true });
}

// Run the build with environment variable
console.log('Running build...');
try {
  execSync('ROLLUP_SKIP_NATIVE=true npx vite build', { 
    stdio: 'inherit',
    env: { ...process.env, ROLLUP_SKIP_NATIVE: 'true' }
  });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 