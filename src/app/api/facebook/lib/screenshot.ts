import { Page } from 'puppeteer';

export async function takeScreenshot(page: Page): Promise<Buffer> {
  try {
    // Scale the page content for a higher resolution screenshot
    await page.evaluate(() => {
      const rootBody = document.querySelector('.rootBody') as HTMLElement;
      if (rootBody) {
        rootBody.style.transform = 'scale(5)';
        rootBody.style.transformOrigin = 'top left';
      }
    });

    const element = await page.$('.rootBody');
    if (!element) {
      throw new Error('Root element not found');
    }
    const screenshotBuffer = await element.screenshot();
    return Buffer.from(screenshotBuffer);
  } catch (error) {
    console.error('Error taking screenshot:', error);
    throw error;
  }
}
