import playwright, { chromium } from "playwright";

const sites = [
  { name: "udemy", url: "https://www.udemy.com/" },
  { name: "openclassrooms", url: "https://openclassrooms.com/" },
  { name: "coursera", url: "https://www.coursera.org/" },
];

const scraper = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",
  });
  const page = await context.newPage();
  await page.goto(sites[0].url);
  await page.waitForLoadState({ waitUntil: "domcontentloaded" });
  await page.fill('input[placeholder="Search for anything"]', "free courses");
  await page.press('input[placeholder="Search for anything"]', "Enter");
  // await page.screenshot({ path: `example-chromium.png` });
  // await browser.close();
};

export default scraper;
