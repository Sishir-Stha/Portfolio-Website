const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Remove problematic Rollup binary if it exists
const rollupPath = path.join(__dirname, 'node_modules', '@rollup', 'rollup-linux-x64-gnu');
if (fs.existsSync(rollupPath)) {
  console.log('Removing problematic Rollup binary...');
  fs.rmSync(rollupPath, { recursive: true, force: true });
}

// Run the build
console.log('Running build...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 