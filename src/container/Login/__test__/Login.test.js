import puppeteer from 'pupeteer';

test('test', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto('localhost:8080');
})