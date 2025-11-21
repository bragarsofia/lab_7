const { test, expect } = require('@playwright/test');

test('Скріншот сторінки Про нас', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page).toHaveScreenshot('about-page.png');
});

test('Скріншот елемента параграфа', async ({ page }) => {
    await page.goto('http://localhost:3000/about.html');
    await expect(page.locator('p')).toHaveScreenshot('about-p.png');
  });