import fs from 'fs';
import path from 'path';
import Critters from 'critters';

const distPath = path.resolve('dist');

async function run() {
  const critters = new Critters({
    path: distPath,
    preload: 'swap',
    pruneSource: false,
    reduceInlineStyles: false
  });

  const htmlPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('Error: dist/index.html not found!');
    process.exit(1);
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  console.log('Extracting critical CSS using critters...');
  try {
    const inlinedHtml = await critters.process(html);
    fs.writeFileSync(htmlPath, inlinedHtml, 'utf8');
    console.log('Successfully inlined critical CSS into dist/index.html!');
  } catch (err) {
    console.error('Critters failed to process html:', err);
    process.exit(1);
  }
}

run();
