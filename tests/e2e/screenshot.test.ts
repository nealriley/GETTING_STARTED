import { test } from '@playwright/test';

// Base path is /GETTING_STARTED in dev and production
const BASE = '/GETTING_STARTED';

test('capture homepage screenshot', async ({ page }) => {
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshots/homepage.png', fullPage: false });
});

test('capture all sections', async ({ page }) => {
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');
  
  // Capture each section (updated for new terminal sections)
  const sections = [
    'intro', 'interfaces', 
    'terminal-chat', 'terminal-raw', 'terminal-translator',  // New terminal sections
    'packages', 'creation', 'markdown', 'structure', 'context', 'decorators', 'factory'
  ];
  
  for (const section of sections) {
    await page.goto(`${BASE}#${section}`);
    // Wait longer for sections with animations
    const waitTime = section === 'structure' ? 4000 : 500;
    await page.waitForTimeout(waitTime);
    await page.screenshot({ path: `screenshots/section-${section}.png`, fullPage: false });
  }
});

test('capture structure animation', async ({ page }) => {
  await page.goto(`${BASE}#structure`);
  await page.waitForLoadState('networkidle');
  
  // Wait for animation to complete (approximately 5 seconds)
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'screenshots/structure-animation-complete.png', fullPage: false });
});

test('capture claude chat animation - web phase', async ({ page }) => {
  await page.goto(`${BASE}#terminal-chat`);
  await page.waitForLoadState('networkidle');
  
  // Capture during web interface phase (around 6 seconds in)
  await page.waitForTimeout(6000);
  await page.screenshot({ path: 'screenshots/claude-chat-web-phase.png', fullPage: false });
});

test('capture claude chat animation - terminal phase', async ({ page }) => {
  await page.goto(`${BASE}#terminal-chat`);
  await page.waitForLoadState('networkidle');
  
  // Capture during terminal interface phase (animation is ~20 seconds total)
  await page.waitForTimeout(20000);
  await page.screenshot({ path: 'screenshots/claude-chat-terminal-phase.png', fullPage: false });
});

test('capture raw terminal animation', async ({ page }) => {
  await page.goto(`${BASE}#terminal-raw`);
  await page.waitForLoadState('networkidle');
  
  // Wait for animation to complete
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'screenshots/raw-terminal-animation.png', fullPage: false });
});

test('capture translator animation', async ({ page }) => {
  await page.goto(`${BASE}#terminal-translator`);
  await page.waitForLoadState('networkidle');
  
  // Wait for animation to complete
  await page.waitForTimeout(12000);
  await page.screenshot({ path: 'screenshots/translator-animation.png', fullPage: false });
});

test('capture packages animation', async ({ page }) => {
  await page.goto(`${BASE}#packages`);
  await page.waitForLoadState('networkidle');
  
  // Wait for animation to complete
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'screenshots/packages-animation-complete.png', fullPage: false });
});

test('debug structure animation', async ({ page }) => {
  // Enable console logging
  page.on('console', msg => console.log('BROWSER:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto(`${BASE}#structure`);
  await page.waitForLoadState('networkidle');
  
  // Check if animation container exists and is visible
  const animContainer = page.locator('[data-animation-id="structure"]');
  const structureAnim = page.locator('[data-structure-animation]');
  const defaultAnim = page.locator('[data-default-animation]');
  
  console.log('Animation container visible:', await animContainer.isVisible());
  console.log('Structure animation visible:', await structureAnim.isVisible());
  console.log('Default animation visible:', await defaultAnim.isVisible());
  
  // Check dimensions
  const animBox = await animContainer.boundingBox();
  console.log('Animation container dimensions:', animBox);
  
  const structBox = await structureAnim.boundingBox();
  console.log('Structure animation dimensions:', structBox);
  
  // Check phase visibility
  const phase1 = page.locator('[data-phase="unstructured"]');
  const phase1Box = await phase1.boundingBox();
  const phase1Opacity = await phase1.evaluate(el => window.getComputedStyle(el).opacity);
  console.log('Phase 1 box:', phase1Box, 'opacity:', phase1Opacity);
  
  await page.waitForTimeout(5000);
  
  // Check again after animation
  const phase1OpacityAfter = await phase1.evaluate(el => window.getComputedStyle(el).opacity);
  console.log('Phase 1 opacity after 5s:', phase1OpacityAfter);
  
  await page.screenshot({ path: 'screenshots/debug-structure.png' });
});
