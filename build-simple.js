import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting alternative build process...');

// Try to use esbuild directly if available
try {
  console.log('Attempting to use esbuild for build...');
  execSync('npx esbuild src/main.tsx --bundle --outfile=dist/index.js --format=esm --platform=browser', { 
    stdio: 'inherit',
    cwd: __dirname
  });
  console.log('esbuild build completed!');
} catch (error) {
  console.log('esbuild failed, trying Vite with environment override...');
  
  // Set environment variables to disable problematic features
  const env = {
    ...process.env,
    ROLLUP_SKIP_NATIVE: 'true',
    VITE_SKIP_NATIVE: 'true',
    NODE_OPTIONS: '--no-experimental-fetch'
  };
  
  try {
    execSync('npx vite build --mode production', { 
      stdio: 'inherit',
      env,
      cwd: __dirname
    });
    console.log('Vite build completed successfully!');
  } catch (viteError) {
    console.error('All build methods failed:', viteError.message);
    process.exit(1);
  }
} 