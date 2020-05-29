import playwright, { chromium } from "playwright";

const scraper = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",
  });
  const page = await context.newPage();
  await page.goto("https://www.udemy.com/");
  await page.waitForSelector("#header-search-field");
  await page.fill("#header-search-field", "free courses");
  await page.press('#header-search-field', 'Enter');
  await page.screenshot({ path: `example-chromium.png` });
  await browser.close();
};

export default scraper;
